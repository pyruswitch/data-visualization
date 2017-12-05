import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, LineChart, PieChart } from 'components';
import config from 'config';
import callApi from 'api';

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasktotal: 0,
      closetasktotal: 0,
      data: []
    };
  }

  componentDidMount() {
    callApi({
      api: 'taskclose',
      success: ({ tasktotal, closetasktotal }) => {
        this.setState({ closetasktotal, tasktotal });
      }
    });
    callApi({
      api: 'daytaskorder',
      success: (response) => {
        this.setState({
          data: response.map(({ date, value }) => (
            { name: date, value: Number(value) }
          ))
        });
      }
    });
  }

  render() {
    const { size, title } = this.props;
    const { colors, percent, tasktotal, closetasktotal, data } = this.state;
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
              <NumberCard type="number" value={tasktotal} icon="person" />
            </div>
          </div>
          <div key="b" data-grid={{ x: 2, y: 0, w: 6, h: 5, static: true }}>
            <Title value={title[1]} />
            <div className="widget-content chart">
              <LineChart
                data={data}
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
                data={[{ "name": "总任务数", "value": tasktotal }, { "name": "已完成任务数", "value": closetasktotal }]}
                inner={0.8}
                height={size[1] - 130}
                colors={['#2f2778', '#924ae1']}
                innerHTML={`<span>${(closetasktotal / tasktotal).toFixed(2) * 100}%</span><span>本周完成率</span></div>`}
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
