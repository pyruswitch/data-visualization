import React, { Component } from 'react';
import { Widget } from 'routes/home/components';
import { callApi } from 'utils';
import api from 'routes/home/api';

class TrafficMonitoring extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: api.monthamount,
      method: 'GET',
      success: (response) => {
        const data = response.map((value, index) => ({ month: index + 1, value: value[1] }));
        this.setState({ data });
      }
    });
  }

  render() {
    return (
      <Widget className="traffic-monitoring" title='实时车流监控'>
      </Widget>
    );
  }
}

export default TrafficMonitoring;
