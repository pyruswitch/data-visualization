import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, PieChart } from 'components';
import config from 'config';
import callApi from 'api';

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // 总用户数
      totaluser: 0,
      // 日活跃用户
      activeuser: 0,
      // 周活跃用户
      sevenactiveuser: 0,
      // 月活跃用户
      thirtyactiveuser: 0,
      // 月新增用户
      thirtynewuser: 0,
      // 周新增用户
      sevenneweuser: 0,
      data1: [
        {
          "type": "Android",
          "value": 230
        },
        {
          "type": "iOS",
          "value": 770
        }
      ].map(({ type, value }) => ({ name: type, value: Number(value) }))
    };
  }

  componentDidMount() {
    callApi({
      api: 'usergender',
      success: ({ female, male }) => {
        this.setState({
          data: [
            { name: '男性', value: Number(male) },
            { name: '女性', value: Number(female) }
          ]
        });
      }
    });
    callApi({
      api: 'communityuseract',
      success: ({
        totaluser,
        activeuser,
        sevenactiveuser,
        thirtyactiveuser,
        thirtynewuser,
        sevenneweuser
      }) => {
        this.setState({
          totaluser,
          activeuser,
          sevenactiveuser,
          thirtyactiveuser,
          thirtynewuser,
          sevenneweuser
        });
      }
    });
  }

  render() {
    const {
      totaluser,
      activeuser,
      sevenactiveuser,
      thirtyactiveuser,
      thirtynewuser,
      sevenneweuser
    } = this.state;
    const { size, title } = this.props;
    return (
      <Widget className="one" >
        <ReactGridLayout
          cols={12}
          margin={[0, 0]}
          rowHeight={size[1] / 12}
          width={size[0]}
        >
          <div key="a" data-grid={{ x: 0, y: 0, w: 6, h: 6, static: true }}>
            <Title value={title[0]} />
            <div className="widget-content flex">
              <NumberCard value={Number(totaluser)} icon='person' type="number" />
              <Line />
              <Box title='周新增用户' number={sevenneweuser} />
              <Box title='月新增用户' number={thirtynewuser} />
            </div>
          </div>
          <div key="b" data-grid={{ x: 6, y: 0, w: 6, h: 6, static: true }}>
            <Title value={title[1]} />
            <div className="widget-content chart" style={{ paddingBottom: 0 }}>
              <PieChart
                height={size[1] / 2 - 50}
                data={this.state.data}
              />
            </div>
          </div>
          <div key="c" data-grid={{ x: 0, y: 6, w: 6, h: 6, static: true }}>
            <Title value={title[2]} />
            <div className="widget-content flex">
              <NumberCard value={Number(thirtyactiveuser)} icon='person' type="number" />
              <Line />
              <Box title='周活跃用户' number={sevenactiveuser} />
              <Box title='日活跃用户' number={activeuser} />
            </div>
          </div>
          <div key="d" data-grid={{ x: 6, y: 6, w: 6, h: 6, static: true }}>
            <Title value={title[3]} />
            <div className="widget-content chart" style={{ paddingBottom: 0 }}>
              <PieChart
                height={size[1] / 2 - 50}
                data={this.state.data1}
              />
            </div>
          </div>
        </ReactGridLayout>
      </Widget>
    );
  }
}

export default One;
