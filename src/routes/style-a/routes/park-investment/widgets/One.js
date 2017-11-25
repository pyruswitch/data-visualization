import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, PieChart } from 'components';
import config from 'config';
import callApi from 'api';

class One extends Component {
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
          <NumberCard value={5300000000} icon='person' type="number" />
          <Line />
          <Box title='总税收' number='1,640,000,000' />
          <Box title='总人数' number='1,561' />
        </div>
      </Widget>
    );
  }
}

export default One;
