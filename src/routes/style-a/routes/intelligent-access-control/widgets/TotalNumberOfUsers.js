import React, { Component } from 'react';
import { Widget, DonutChart, Box } from 'components';
import { callApi } from 'utils';
import api from 'api';

class TotalNumberOfUsers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="total-number-of-users" title='授权用户总数'>
        <div className='number'>
          <span>{123}</span>
        </div>
        <div className="box">
          <Box title='昨日用户浏览' number={'83,358'} />
          <Box title='本月用户流量' number={'8,884,357'} />
        </div>
      </Widget>
    );
  }
}

export default TotalNumberOfUsers;
