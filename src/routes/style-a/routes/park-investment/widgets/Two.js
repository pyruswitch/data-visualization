import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, PieChart } from 'components';
import config from 'config';
import callApi from 'api';

class Two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  render() {
    const { size, title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content flex">
          <NumberCard value={123} icon='person' type="number" />
          <Line />
          <Box title='今年签约数' number='21,728' />
          <Box title='今年到期数' number='21,728' />
        </div>
      </Widget>
    );
  }
}

export default Two;
