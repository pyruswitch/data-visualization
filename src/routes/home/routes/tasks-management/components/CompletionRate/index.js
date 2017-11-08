import React, { Component } from 'react';
import { Widget, DonutChart } from 'routes/home/components';
import callApi from 'routes/home/api';

class CompletionRate extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{ "name": "总任务数", "value": 837 }, { "name": "已完成任务数", "value": 4194 }] };
  }

  render() {
    return (
      <Widget className="completion-rate" title='任务总完成率'>
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

export default CompletionRate;
