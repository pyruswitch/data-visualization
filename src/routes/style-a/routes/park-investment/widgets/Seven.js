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
          name: "新材料",
          value: 18
        },
        {
          name: "新能源",
          value: 13
        },
        {
          name: "电子商务",
          value: 35
        },
        {
          name: "时尚产业",
          value: 32
        },
        {
          name: "其他",
          value: 2
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
