import React, { Component } from 'react';
import { Widget, LineChart, Title, Tabs } from 'components';
import config from 'config';
import callApi from 'api';


class Two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data0: [
        { value: 0, name: "01" },
        { value: 0, name: "02" },
        { value: 0, name: "03" },
        { value: 0, name: "04" },
        { value: 0, name: "05" },
        { value: 0, name: "06" },
        { value: 0, name: "07" },
        { value: 0, name: "08" },
        { value: 0, name: "09" },
        { value: 8697, name: "10" },
        { value: 892, name: "11" },
        { value: 0, name: "12" }
      ],
      data1: [
        { value: 0, name: "01" },
        { value: 0, name: "02" },
        { value: 0, name: "03" },
        { value: 0, name: "04" },
        { value: 0, name: "05" },
        { value: 0, name: "06" },
        { value: 0, name: "07" },
        { value: 0, name: "08" },
        { value: 0, name: "09" },
        { value: 7952, name: "10" },
        { value: 692, name: "11" },
        { value: 0, name: "12" }
      ],
      data2: [
        { value: 0, name: "01" },
        { value: 0, name: "02" },
        { value: 0, name: "03" },
        { value: 0, name: "04" },
        { value: 0, name: "05" },
        { value: 0, name: "06" },
        { value: 0, name: "07" },
        { value: 0, name: "08" },
        { value: 0, name: "09" },
        { value: 8697, name: "10" },
        { value: 892, name: "11" },
        { value: 0, name: "12" }
      ],
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
                  data={this.state[`data${index}`]}
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
