import React, { Component } from 'react';
import { Widget, PieChart } from 'components';
import callApi from 'api';

class TaskType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    callApi({
      api: 'inspectiontasktype',
      success: (response) => {
        this.setState({ data: response });
      }
    });
  }


  render() {
    return (
      <Widget className="task-type" title='任务类型分布'>
        <PieChart
          data={this.state.data}
        /* inner={0.8} */
        /* innerHTML={`<div className="donut-chart-html"><span>83%</span><span>响应率</span></div>`} */
        /* plotCfg={{ margin: [0, 150, 0, 0] }} */
        />
      </Widget>
    );
  }
}

export default TaskType;

// [
//   { name: '已到期', value: 56.33 },
//   { name: '合同期', value: 24.03 },
//   { name: '申请入驻', value: 10.38 },
//   { name: '商务沟通', value: 4.77 }
// ]
