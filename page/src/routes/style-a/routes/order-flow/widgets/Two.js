import React, { Component } from 'react';
import { Widget, Title, NumberCard, CarouselTable } from 'components';
import callApi from 'api';
const columns = [
  { title: '订单类型', width: 'col-3', key: 'ordertype' },
  { title: '客户', width: 'col-3', key: 'name' },
  { title: '消费金额', width: 'col-2', key: 'payamount' },
  { title: '支付方式', width: 'col-2', key: 'paychannel' },
  { title: '时间', width: 'col-2', key: 'paydate' }
];

class Two extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'parkorder',
      success: (data) => {
        const channel = {
          wechat: '微信',
          alipay: '支付宝'
        };
        this.setState({
          data: data.map(({ paychannel, ...rest }) => (
            { paychannel: channel[paychannel], ...rest }))
        });
      }
    });
  }

  render() {
    const { data } = this.state;
    const { title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content">
          <CarouselTable columns={columns} data={data} />
        </div>
      </Widget>
    );
  }
}

export default Two;
