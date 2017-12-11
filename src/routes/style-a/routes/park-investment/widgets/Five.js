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
        response = response.map(({ leasedarea, rentarea, ...rest }) => (
          { leasedarea, rentarea, totalArea: leasedarea + rentarea, ...rest })
        );
        frame = Frame.combineColumns(frame, ['leasedarea', 'rentarea'], 'value', 'type', ['month', 'totalArea']);
        // 这里不知道该怎么用frame或配置显示中文，只能这么转成json
        this.setState({
          data: frame.toJSON().map(({ type, ...rest }) => ({
            type: typeMap[type], ...rest
          }))
        });
      }
    });
  }

  render() {
    console.log(this.state.data);
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
