import React, { Component } from 'react';
import { Box, NumberCard, Widget, DonutChart } from 'components';
import callApi from 'api';

class OrderType extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'ordertypecount',
      success: (response) => {
        this.setState({ data: response });
      }
    });
  }

  render() {
    return (
      <Widget className="order-type" title='订单类型'>
        <DonutChart data={this.state.data} />
      </Widget>
    );
  }
}

export default OrderType;
// {"errorCode": "200", "errorDescription": "OK", "response": [{"name": "活动报名", "value": 53}, {"name": "电商", "value": 4286}, {"name": "停车缴费", "value": 206}]}
// [{ "name": "活动报名", "value": 1253 }, { "name": "电商", "value": 4286 }, { "name": "停车缴费", "value": 2206 }]
