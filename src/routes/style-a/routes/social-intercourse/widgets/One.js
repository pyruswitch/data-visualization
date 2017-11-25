import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, PieChart } from 'components';
import config from 'config';
import callApi from 'api';

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "type": "男性",
          "value": 390
        },
        {
          "type": "女性",
          "value": 580
        },
        {
          "type": "其他",
          "value": 30
        }
      ].map(({ type, value }) => ({ name: type, value: Number(value) })),
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
    // callApi({
    //   api: 'companyespon',
    //   success: (response) => {
    //     this.setState({ data: response });
    //     console.log(response);
    //   }
    // });
  }

  render() {
    const { size } = this.props;
    return (
      <Widget className="one" >
        <ReactGridLayout
          cols={12}
          margin={[0, 0]}
          rowHeight={size[1] / 12}
          width={size[0]}
        >
          <div key="a" data-grid={{ x: 0, y: 0, w: 6, h: 6, static: true }}>
            <Title value="新注册用户" />
            <div className="widget-content flex">
              <NumberCard value={8697} icon='person' type="number" />
              <Line />
              <Box title='周新增用户' number='1,043' />
              <Box title='日新增用户' number='176' />
            </div>
          </div>
          <div key="b" data-grid={{ x: 6, y: 0, w: 6, h: 6, static: true }}>
            <Title value="性别比例" />
            <div className="widget-content chart">
              <PieChart
                height={size[1] / 2 - 50}
                data={this.state.data}
              />
            </div>
          </div>
          <div key="c" data-grid={{ x: 0, y: 6, w: 6, h: 6, static: true }}>
            <Title value="月活跃用户" />
            <div className="widget-content flex">
              <NumberCard value={7952} icon='person' type="number" />
              <Line />
              <Box title='周活跃用户' number='1,864' />
              <Box title='日活跃用户' number='1,354' />
            </div>
          </div>
          <div key="d" data-grid={{ x: 6, y: 6, w: 6, h: 6, static: true }}>
            <Title value="设备终端" />
            <div className="widget-content chart">
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
