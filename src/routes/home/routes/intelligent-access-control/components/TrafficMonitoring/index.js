import React, { Component } from 'react';
import { Widget } from 'routes/home/components';
import { callApi } from 'utils';
import api from 'routes/home/api';

class TrafficMonitoring extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
      <Widget className="traffic-monitoring" title='实时人流量监控'>
      </Widget>
    );
  }
}

export default TrafficMonitoring;
