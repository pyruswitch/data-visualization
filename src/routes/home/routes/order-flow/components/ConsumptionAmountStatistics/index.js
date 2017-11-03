import React, { Component } from 'react';
import { Histogram, Widget } from 'routes/home/components';
import callApi from 'routes/home/api';

class ConsumptionAmountStatistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        ["01", 11319.06],
        ["02", 34848.08],
        ["03", 26375.48],
        ["04", 4191.55],
        ["05", 55931.86],
        ["06", 85385.38],
        ["07", 4331.57],
        ["08", 21672.1],
        ["09", 52132.83],
        ["10", 4891.5]
      ].map((value, index) => ({ name: value[0], value: value[1] }))
    };
  }

  // componentDidMount() {
  //   callApi({
  //     api: 'monthamount',
  //     success: (response) => {
  //       const data = response.map((value, index) => ({ name: value[0], value: value[1] }));
  //       this.setState({ data });
  //     }
  //   });
  // }

  render() {
    return (
      <Widget className="consumption-amount-statistics" title='消费金额统计'>
        <Histogram
          data={this.state.data}
          colX={{
            formatter: dimValue => `${dimValue}月`
          }}
          colY={{
            type: 'linear',
            alias: '单位:元'
          }}
        />
      </Widget>
    );
  }
}

export default ConsumptionAmountStatistics;
// {"errorCode": "200", "errorDescription": "OK", "response": [["01", 11319.06], ["02", 34848.08], ["03", 26375.48], ["04", 4191.55], ["05", 55931.86], ["06", 85385.38], ["07", 4331.57], ["08", 21672.1], ["09", 52132.83], ["10", 4891.5]]}
