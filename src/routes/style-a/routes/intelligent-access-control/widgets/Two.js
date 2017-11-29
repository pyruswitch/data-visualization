import React, { Component } from 'react';
import { Widget, DonutChart, Box, Title, NumberCard, Line } from 'components';
import { callApi } from 'utils';
import api from 'api';

class Two extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content flex">
          <NumberCard value={5300000000} icon='person' type="number" />
          <Line />
          <Box title='昨日访客流量' number='1,640,000,000' />
          <Box title='本月访客流量' number='1,561' />
        </div>
      </Widget>
    );
  }
}

export default Two;
