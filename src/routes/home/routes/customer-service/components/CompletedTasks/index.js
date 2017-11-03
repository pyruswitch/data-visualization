import React, { Component } from 'react';
import { Widget, DonutChart } from 'routes/home/components';
import callApi from 'routes/home/api';
// {"errorCode": "200", "errorDescription": "OK", "response": [{"name": "总任务数", "value": 837}, {"name": "已完成任务数", "value": 227}]}
class CompletedTasks extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{ "name": "总任务数", "value": 837 }, { "name": "已完成任务数", "value": 4194 }] };
  }

  // componentDidMount() {
  //   callApi({
  //     api: 'taskclose',
  //     success: (data) => {
  //       this.setState({ data });
  //     }
  //   });
  // }

  render() {
    const { data } = this.state;

    if (data.length > 0)
      var P = (data[1].value / data[0].value * 100).toFixed(0);
    return (
      <Widget className="completed-tasks" title='已完成'>
        <DonutChart
          showLabel={false}
          data={this.state.data}
          inner={0.8}
          colors={['#2f2778', '#924ae1']}
          innerHTML={`<div><span>83%</span><span>完成</span></div>`}
          plotCfg={{ margin: [0, 0, 0, 0] }}
        />
      </Widget>
    );
  }
}

export default CompletedTasks;
