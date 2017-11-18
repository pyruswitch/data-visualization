import React, { Component } from 'react';
import { Box, NumberCard, Widget, PieChart } from 'components';
import callApi from 'api';

class PaymentMethod extends Component {
  constructor(props) {
    super(props);
    const types = { wechat: '微信', alipay: '支付宝' };
    this.state = { data: [] };
  }

  componentDidMount() {
    const types = { wechat: '微信', alipay: '支付宝' };
    callApi({
      api: 'orderchannelcount',
      success: (response) => {
        const data = response.map((value) => ({ name: types[value[0]] || '其他', value: value[1] }));
        this.setState({ data });
      }
    });
  }

  render() {
    return (
      <Widget className="payment-method" title='支付方式'>
        <PieChart data={this.state.data} />
      </Widget>
    );
  }
}

export default PaymentMethod;

// [["alipay", 213], ["wechat", 463]].map((value) => ({ name: types[value[0]] || '其他', value: value[1] }))
