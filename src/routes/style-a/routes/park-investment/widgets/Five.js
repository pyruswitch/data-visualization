import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, LineChart } from 'components';
import config from 'config';
import callApi from 'api';

class Five extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { value: 76, name: "01", type: "招租面积" },
        { value: 149, name: "02", type: "招租面积" },
        { value: 213, name: "03", type: "招租面积" },
        { value: 48, name: "04", type: "招租面积" },
        { value: 99, name: "05", type: "招租面积" },
        { value: 87, name: "06", type: "招租面积" },
        { value: 71, name: "07", type: "招租面积" },
        { value: 6, name: "08", type: "招租面积" },
        { value: 53, name: "09", type: "招租面积" },
        { value: 35, name: "10", type: "招租面积" },
        { value: 35, name: "11", type: "招租面积" },
        { value: 35, name: "12", type: "招租面积" },
        { value: 716, name: "01", type: "在租面积" },
        { value: 149, name: "02", type: "在租面积" },
        { value: 213, name: "03", type: "在租面积" },
        { value: 483, name: "04", type: "在租面积" },
        { value: 439, name: "05", type: "在租面积" },
        { value: 875, name: "06", type: "在租面积" },
        { value: 761, name: "07", type: "在租面积" },
        { value: 66, name: "08", type: "在租面积" },
        { value: 53, name: "09", type: "在租面积" },
        { value: 35, name: "10", type: "在租面积" },
        { value: 36, name: "11", type: "在租面积" },
        { value: 35, name: "12", type: "在租面积" }
      ]
    };
  }

  render() {
    const { size, title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart">
          <LineChart
            data={this.state.data}
            colX={{
              formatter: (dimValue) => (`${dimValue}月`)
            }}
            width={size[0]}
            height={size[1] - 50}
          />
        </div>
      </Widget>
    );
  }
}

export default Five;
