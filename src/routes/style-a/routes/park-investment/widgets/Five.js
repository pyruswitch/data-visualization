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
        { value: 242100, name: "01", type: "在租面积" },
        { value: 242800, name: "02", type: "在租面积" },
        { value: 243321, name: "03", type: "在租面积" },
        { value: 245300, name: "04", type: "在租面积" },
        { value: 248700, name: "05", type: "在租面积" },
        { value: 250000, name: "06", type: "在租面积" },
        { value: 252288, name: "07", type: "在租面积" },
        { value: 255020, name: "08", type: "在租面积" },
        { value: 258000, name: "09", type: "在租面积" },
        { value: 261220, name: "10", type: "在租面积" },
        { value: 266000, name: "11", type: "在租面积" },
        { value: 266000, name: "12", type: "在租面积" },
        { value: 37900, name: "01", type: "招租面积" },
        { value: 37200, name: "02", type: "招租面积" },
        { value: 36679, name: "03", type: "招租面积" },
        { value: 34700, name: "04", type: "招租面积" },
        { value: 31300, name: "05", type: "招租面积" },
        { value: 30000, name: "06", type: "招租面积" },
        { value: 27712, name: "07", type: "招租面积" },
        { value: 24980, name: "08", type: "招租面积" },
        { value: 22000, name: "09", type: "招租面积" },
        { value: 18780, name: "10", type: "招租面积" },
        { value: 14000, name: "11", type: "招租面积" },
        { value: 14000, name: "12", type: "招租面积" }
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
