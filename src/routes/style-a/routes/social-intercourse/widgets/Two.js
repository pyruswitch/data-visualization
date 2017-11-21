import React, { Component } from 'react';
import { Widget, LineChart, Title, Tabs } from 'components';
import config from 'config';
import callApi from 'api';


class Two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "value": 76, "date": "01" },
        { "value": 149, "date": "02" },
        { "value": 213, "date": "03" },
        { "value": 48, "date": "04" },
        { "value": 99, "date": "05" },
        { "value": 87, "date": "06" },
        { "value": 71, "date": "07" },
        { "value": 6, "date": "08" },
        { "value": 53, "date": "09" },
        { "value": 35, "date": "10" }
      ].map(({ date, value }) => ({ type: '2017', name: date, value })),
      data1: [
        { "value": 0, "date": "01" },
        { "value": 149, "date": "02" },
        { "value": 13, "date": "03" },
        { "value": 8, "date": "04" },
        { "value": 29, "date": "05" },
        { "value": 87, "date": "06" },
        { "value": 71, "date": "07" },
        { "value": 6, "date": "08" },
        { "value": 53, "date": "09" },
        { "value": 35, "date": "10" }
      ].map(({ date, value }) => ({ type: '2017', name: date, value }))
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
    // transform: translateY(-${height * number.charAt(index)}px);
  }

  render() {
    const { size } = this.props;
    // console.log(size);
    return (
      <Widget className="two" >
        <Tabs title="整体趋势图">
          {
            ['新增用户', '活跃用户', '累计用户'].map((value, index) => (
              <Tabs.TabPane tab={value} key={index}>
                <LineChart
                  data={this.state.data}
                  colX={{
                    formatter: (dimValue) => (`${dimValue}月`)
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
