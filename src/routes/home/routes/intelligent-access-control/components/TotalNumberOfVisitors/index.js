import React, { Component } from 'react';
import { Widget } from 'routes/home/components';
import { callApi } from 'utils';
import api from 'routes/home/api';

class TotalNumberOfVisitors extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
      <Widget className="traffic-monitoring" title='授权访客总数'>
      </Widget>
    );
  }
}

export default TotalNumberOfVisitors;
