import React, { Component } from 'react';
import { Widget, Histogram, Box } from 'components';
import { callApi } from 'utils';
import api from 'api';

class TotalNumberOfVisitors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="total-number-of-visitors" title='授权访客总数'>
        <div className='number'>
          <span>{123}</span>
        </div>
        <div className="box">
          <Box title='昨日访客浏览' number={'83,358'} />
          <Box title='本月访客流量' number={'8,884,357'} />
        </div>
      </Widget>
    );
  }
}

export default TotalNumberOfVisitors;
