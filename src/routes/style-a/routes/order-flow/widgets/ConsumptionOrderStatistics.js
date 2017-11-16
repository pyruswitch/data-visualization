import React, { Component } from 'react';
import { Histogram, Widget } from 'components';
import callApi from 'api';

class ConsumptionOrderStatistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    callApi({
      api: 'monthcount',
      success: (response) => {
        const data = response.map((value, index) => ({ name: value[0], value: value[1] }));
        this.setState({ data });
      }
    });
  }

  render() {
    return (
      <Widget className="consumption-order-statistics" title='消费订单统计'>
        <Histogram
          data={this.state.data}
          colX={{
            formatter: dimValue => `${dimValue}月`
          }}
          colY={{
            type: 'linear',
            alias: '单位:单'
          }}
        />
      </Widget>
    );
  }
}

export default ConsumptionOrderStatistics;
// {"errorCode": "200", "errorDescription": "OK", "response": [["01", 498], ["02", 449], ["03", 600], ["04", 363], ["05", 492], ["06", 539], ["07", 284], ["08", 579], ["09", 539], ["10", 202]]}
// [
//   ["01", 498],
//   ["02", 449],
//   ["03", 600],
//   ["04", 363],
//   ["05", 492],
//   ["06", 539],
//   ["07", 284],
//   ["08", 579],
//   ["09", 539],
//   ["10", 202]
// ].map((value, index) => ({ name: value[0], value: value[1] }))
