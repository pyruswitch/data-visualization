import React, { Component } from 'react';
import { Widget, DonutChart } from 'components';
import callApi from 'api';
// {"errorCode": "200", "errorDescription": "OK", "response": [{"name": "总任务数", "value": 837}, {"name": "已完成任务数", "value": 227}]}
class CompletedTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 百分比
      percent: 0,
      // 模拟比例的数据
      data: [],
      // 色环颜色
      colors: ['#2f2778', '#924ae1']
    };
  }

  componentDidMount() {
    callApi({
      api: 'taskclose',
      success: (data) => {
        const percent = data[1].value / data[0].value;
        if (percent === 1) {
          this.setState({ percent, data: [{ "name": 'n1', "value": 100 }], colors: ['#924ae1'] });
        } else {
          this.setState({ percent, data: [{ "name": 'n1', "value": 100 }, { "name": 'n2', "value": percent * 100 / (1 - percent) }] });
        }
      }
    });
  }

  render() {
    const { data, percent, colors } = this.state;
    return (
      <Widget className="completed-tasks" title='已完成'>
        <DonutChart
          data={this.state.data}
          inner={0.8}
          colors={colors}
          innerHTML={`<div><span>${(percent * 100).toFixed(0)}%</span><span>完成</span></div>`}
          plotCfg={{ margin: [0, 0, 0, 0] }}
        />
      </Widget>
    );
  }
}

export default CompletedTasks;
// [{ "name": "总任务数", "value": 837 }, { "name": "已完成任务数", "value": 4194 }]
