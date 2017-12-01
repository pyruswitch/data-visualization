import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, LineChart, PieChart } from 'components';
import config from 'config';
import callApi from 'api';

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data0: [
        { value: 76, name: "01" },
        { value: 149, name: "02" },
        { value: 213, name: "03" },
        { value: 48, name: "04" },
        { value: 99, name: "05" },
        { value: 87, name: "06" },
        { value: 71, name: "07" },
        { value: 6, name: "08" },
        { value: 53, name: "09" },
        { value: 35, name: "10" },
        { value: 35, name: "11" },
        { value: 35, name: "12" }
      ],
      data1: [{ "name": "总任务数", "value": 837 }, { "name": "已完成任务数", "value": 4194 }]
    };
  }

  componentDidMount() {

  }

  render() {
    const { size, title } = this.props;
    const { colors, percent } = this.state;
    return (
      <Widget className="one" >
        <ReactGridLayout
          cols={8}
          margin={[0, 0]}
          rowHeight={size[1] / 5}
          width={size[0]}
        >
          <div key="a" data-grid={{ x: 0, y: 0, w: 2, h: 2, static: true }}>
            <Title value={title[0]} />
            <div className="widget-content chart">
              <NumberCard type="number" value={837} icon="person" />
            </div>
          </div>
          <div key="b" data-grid={{ x: 2, y: 0, w: 6, h: 5, static: true }}>
            <Title value={title[1]} />
            <div className="widget-content chart">
              <LineChart
                data={this.state.data0}
                colX={{ formatter: (dimValue) => (`${dimValue}月`) }}
                colY={{ alias: '单位：条' }}
                width={size[0]}
                height={size[1] - 50}
              />
            </div>
          </div>
          <div key="c" data-grid={{ x: 0, y: 2, w: 2, h: 3, static: true }}>
            <div className="chart">
              <PieChart
                data={this.state.data1}
                inner={0.8}
                height={size[1] - 130}
                colors={['#2f2778', '#924ae1']}
                innerHTML={`<span>83%</span><span>本周完成率</span></div>`}
                plotCfg={{ margin: [0, 0, 0, 0] }}
              />
            </div>
          </div>
        </ReactGridLayout>
      </Widget>
    );
  }
}

export default One;
