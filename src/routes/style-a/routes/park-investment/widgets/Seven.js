import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, PieChart } from 'components';
import config from 'config';
import callApi from 'api';

class Seven extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "name": "软件行业",
          "value": 495
        },
        {
          "name": "电子行业",
          "value": 390
        },
        {
          "name": "房地产类",
          "value": 150
        },
        {
          "name": "健康与医疗",
          "value": 133
        },
        {
          "name": "服务行业",
          "value": 105
        },
        {
          "name": "其他",
          "value": 98
        }
      ]
    };
  }


  render() {
    const { size, title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart">
          <PieChart
            width={size[0]}
            height={size[1] - 50}
            data={this.state.data}
          />
        </div>
      </Widget>
    );
  }
}

export default Seven;
