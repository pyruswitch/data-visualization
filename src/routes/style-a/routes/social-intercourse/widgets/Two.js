import React, { Component } from 'react';
import { Widget, LineChart, Title, Tabs } from 'components';
import config from 'config';
import callApi from 'api';


class Two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 日新增用户
      data0: [],
      // 日活跃用户
      data1: [],
      // 累计用户
      data2: [],
    };
  }

  componentDidMount() {
    callApi({
      api: 'daynewusertrend',
      success: (data0) => {
        this.setState({ data0 });
      }
    });
    callApi({
      api: 'dayactusertrend',
      success: (data1) => {
        this.setState({ data1 });
      }
    });
    callApi({
      api: 'daytotalusertrend',
      success: (data2) => {
        this.setState({ data2 });
      }
    });
  }

  render() {
    const { size, title } = this.props;
    // console.log(size);
    return (
      <Widget className="two" >
        <Tabs title={title}>
          {
            ['新增用户', '活跃用户', '累计用户'].map((value, index) => (
              <Tabs.TabPane tab={value} key={index}>
                <LineChart
                  data={this.state[`data${index}`]}
                  colX={{ type: 'time' }}
                  colY={{
                    alias: `每日${value}人数`,
                    type: 'log',
                    min: 0,
                    max: 3000
                  }}
                  width={size[0]}
                  height={size[1] - 50}
                />
              </Tabs.TabPane>
            ))
          }
        </Tabs>
      </Widget>
    );
  }
}

export default Two;
