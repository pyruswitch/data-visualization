import React, { Component } from 'react';
import { Widget, AreaGraph } from 'components';
import { callApi } from 'utils';
import api from 'api';
import config from 'config';

class TrafficStatistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ "value": 76, "date": "01" },
      { "value": 149, "date": "02" },
      { "value": 213, "date": "03" },
      { "value": 48, "date": "04" },
      { "value": 99, "date": "05" },
      { "value": 87, "date": "06" },
      { "value": 71, "date": "07" },
      { "value": 6, "date": "08" },
      { "value": 53, "date": "09" },
      { "value": 35, "date": "10" }
      ].map(({ date, value }) => ({ type: '2017', name: date, value }))
    };
  }


  render() {
    const { number, data } = this.state;
    return (
      <Widget className="traffic-statistics" title='逐时人流量统计'>
        <AreaGraph
          data={data}
          colX={{
            formatter: (dimValue) => (`${dimValue}月`)
          }}
          height={config.height * 4}
        />
      </Widget>
    );
  }
}

export default TrafficStatistics;
