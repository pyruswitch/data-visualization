import React, { Component } from 'react';
import { Box, Number, Widget, Histogram } from 'components';
import callApi from 'api';

class ConsumptionDistribution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    callApi({
      api: 'ordertypeamount',
      success: (response) => {
        const data = response.map(({ name, value }) => ({ name: name, value: value }));
        this.setState({ data });
      }
    });
  }

  render() {
    return (
      <Widget className="consumption-distribution" title='本月消费分布'>
        <Histogram
          data={this.state.data}
          colX={{
            formatter: dimValue => dimValue
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

export default ConsumptionDistribution;

// {"errorCode": "200", "errorDescription": "OK", "response": [{"name": "活动报名", "value": 151.39}, {"name": "电商", "value": 60712.52}, {"name": "停车缴费", "value": 240215.5}]}

// [
//   { "name": "活动报名", "value": 151.39 },
//   { "name": "电商", "value": 60712.52 },
//   { "name": "停车缴费", "value": 240215.5 }
// ].map(({ name, value }) => ({ name: name, value: value }))
