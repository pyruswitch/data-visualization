import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, PieChart } from 'components';
import config from 'config';
import callApi from 'api';

class Five extends Component {
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
        <div className="widget-content chart">
          <PieChart data={this.state.data} height={size[1] - 70} />
        </div>
      </Widget>
    );
  }
}

export default Five;
