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
        { value: 31450, name: "01", type: "招租面积" },
        { value: 31450, name: "02", type: "招租面积" },
        { value: 31450, name: "03", type: "招租面积" },
        { value: 31450, name: "04", type: "招租面积" },
        { value: 31450, name: "05", type: "招租面积" },
        { value: 31450, name: "06", type: "招租面积" },
        { value: 31450, name: "07", type: "招租面积" },
        { value: 31450, name: "08", type: "招租面积" },
        { value: 31450, name: "09", type: "招租面积" },
        { value: 31450, name: "10", type: "招租面积" },
        { value: 31450, name: "11", type: "招租面积" },
        { value: 31450, name: "12", type: "招租面积" },
        { value: 266000, name: "01", type: "在租面积" },
        { value: 266000, name: "02", type: "在租面积" },
        { value: 266000, name: "03", type: "在租面积" },
        { value: 266000, name: "04", type: "在租面积" },
        { value: 266000, name: "05", type: "在租面积" },
        { value: 266000, name: "06", type: "在租面积" },
        { value: 266000, name: "07", type: "在租面积" },
        { value: 266000, name: "08", type: "在租面积" },
        { value: 266000, name: "09", type: "在租面积" },
        { value: 266000, name: "10", type: "在租面积" },
        { value: 266000, name: "11", type: "在租面积" },
        { value: 266000, name: "12", type: "在租面积" }
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
