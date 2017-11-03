import React, { Component } from 'react';
import { Widget } from 'routes/home/components';
import { callApi } from 'utils';
import api from 'routes/home/api';

class TrafficStatistics extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
      <Widget className="traffic-monitoring" title='逐时人流量统计'>
      </Widget>
    );
  }
}

export default TrafficStatistics;
