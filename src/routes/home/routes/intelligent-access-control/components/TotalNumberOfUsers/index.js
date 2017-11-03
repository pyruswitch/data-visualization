import React, { Component } from 'react';
import { Widget } from 'routes/home/components';
import { callApi } from 'utils';
import api from 'routes/home/api';

class TotalNumberOfUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
      <Widget className="traffic-monitoring" title='授权用户总数'>
      </Widget>
    );
  }
}

export default TotalNumberOfUsers;
