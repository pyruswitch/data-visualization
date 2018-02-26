import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { StackedAreaGraph, Widget, NumberCard, Title, Line, Box, LineChart } from 'components';
import config from 'config';
import G2, { Stat } from 'g2';
import createG2 from 'g2-react';
import callApi from 'api';

class Five extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      forceFit: true,
      width: 500,
      height: 450,
      plotCfg: {
        margin: [20, 100, 60]
      },
    };
  }

  componentDidMount() {

    callApi({
      api: 'montharea',
      success: (response) => {
        var Frame = G2.Frame;
        var frame = new Frame(response);
        const typeMap = { leasedarea: '在租面积', rentarea: '招租面积' }
        response = response.map(({ leasedarea, rentarea, ...rest }) => {
          return ({
            leasedarea: Number(leasedarea),
            rentarea: Number(rentarea),
            ...rest
          })
        });
        frame = Frame.combineColumns(frame, ['leasedarea', 'rentarea'], 'value', 'type', ['month']);
        // 这里不知道该怎么用frame或配置显示中文，只能这么转成json
        console.log(frame.toJSON())
        this.setState({
          data: frame.toJSON().map(({ type, value, month }) => ({ type: typeMap[type], value: +value, month }))
        });
      }
    });
  }

  render() {
    const { size, title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart">
          <StackedAreaGraph
            data={this.state.data}
            width={this.state.width}
            height={size[1] - 50}
            colY={{ alias: '招租趋势图（平方米）' }}
            plotCfg={this.state.plotCfg}
            forceFit={this.state.forceFit} />
        </div>
      </Widget>
    );
  }
}

export default Five;

// [
//   { value: 242100, month: "01", type: "在租面积" },
//   { value: 242800, month: "02", type: "在租面积" },
//   { value: 243321, month: "03", type: "在租面积" },
//   { value: 245300, month: "04", type: "在租面积" },
//   { value: 248700, month: "05", type: "在租面积" },
//   { value: 250000, month: "06", type: "在租面积" },
//   { value: 252288, month: "07", type: "在租面积" },
//   { value: 255020, month: "08", type: "在租面积" },
//   { value: 258000, month: "09", type: "在租面积" },
//   { value: 261220, month: "10", type: "在租面积" },
//   { value: 266000, month: "11", type: "在租面积" },
//   { value: 266000, month: "12", type: "在租面积" },
//   { value: 37900, month: "01", type: "招租面积" },
//   { value: 37200, month: "02", type: "招租面积" },
//   { value: 36679, month: "03", type: "招租面积" },
//   { value: 34700, month: "04", type: "招租面积" },
//   { value: 31300, month: "05", type: "招租面积" },
//   { value: 30000, month: "06", type: "招租面积" },
//   { value: 27712, month: "07", type: "招租面积" },
//   { value: 24980, month: "08", type: "招租面积" },
//   { value: 22000, month: "09", type: "招租面积" },
//   { value: 18780, month: "10", type: "招租面积" },
//   { value: 14000, month: "11", type: "招租面积" },
//   { value: 14000, month: "12", type: "招租面积" }
// ]
