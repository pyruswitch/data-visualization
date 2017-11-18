import React, { Component } from 'react';
import { Widget, PieChart } from 'components';
import callApi from 'api';

class OnTimeRate extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{ "name": "总任务数", "value": 837 }, { "name": "已完成任务数", "value": 4194 }] };
  }

  render() {
    return (
      <Widget className="on-time-rate" title='响应及时率'>
        <PieChart
          data={this.state.data}
          inner={0.8}
          colors={['#2f2778', '#924ae1']}
          innerHTML={`<div><span>83%</span><span>响应率</span></div>`}
          plotCfg={{ margin: [0, 0, 0, 0] }}
        />
      </Widget>
    );
  }
}

export default OnTimeRate;
