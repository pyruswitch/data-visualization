import React, { Component } from 'react';
import { Widget, Title, NumberCard, CarouselTable } from 'components';
import callApi from 'api';
const columns = [
  { title: '订单类型', width: 'col-1', key: 'type' },
  { title: '客户', width: 'col-3', key: 'user' },
  { title: '订单详情', width: 'col-2', key: 'detail' },
  { title: '消费金额', width: 'col-2', key: 'amount' },
  { title: '支付方式', width: 'col-2', key: 'payment' },
  { title: '时间', width: 'col-2', key: 'time' }
];

let DATA =
  [
    { type: '租金', user: '深圳永佳****有限公司', detail: '*月份租金', amount: '70000', payment: '支付宝', time: '24/08/2017 9:00' },
    { type: '电商', user: '姚**云', detail: '能量加油站消费', amount: '20', payment: '支付宝', time: '23/08/2017 9:15' },
    { type: '电商', user: '姚**云', detail: '左邻小站消费', amount: '50', payment: '微信', time: '23/08/2017 9:15' },
    { type: '电商', user: '韦**', detail: '左邻小站消费', amount: '30', payment: '微信', time: '24/08/2017 10:05' },
    { type: '电商', user: '林**', detail: '能量加油站消费', amount: '60', payment: '支付宝', time: '18/08/2017 10:30' },
    { type: '停车费', user: '李**', detail: '月卡充值', amount: '800', payment: '支付宝', time: '18/08/2017 11:30' },
    { type: '停车费', user: '何**辉', detail: '临时卡缴费', amount: '100', payment: '微信', time: '18/08/2017 12:30' },
    { type: '物业费', user: '深圳市永佳****有限公司', detail: '*月份物业费', amount: '5000', payment: '微信', time: '18/08/2017 13:30' },
    { type: '会议室预定', user: '林**', detail: '预定**资源', amount: '200', payment: '微信', time: '18/08/2017 14:30' },
    { type: '租金', user: '深圳市永佳****有限公司', detail: '*月份租金', amount: '70000', payment: '支付宝', time: '18/08/2017 15:30' },
    { type: '电商', user: '王**', detail: '左邻小站消费', amount: '20', payment: '微信', time: '23/08/2017 9:15' },
    { type: '租金', user: '嘉兴维娃斯****有限公司', detail: '*月份租金', amount: '50000', payment: '支付宝', time: '19/08/2017 15:30' },
    { type: '租金', user: '嘉兴珍妮纺****有限公司', detail: '*月份租金', amount: '80000', payment: '支付宝', time: '19/08/2017 12:20' },
    { type: '租金', user: '深圳永佳****有限公司', detail: '*月份租金', amount: '70000', payment: '支付宝', time: '24/08/2017 9:00' },
    { type: '电商', user: '姚**云', detail: '能量加油站消费', amount: '20', payment: '支付宝', time: '23/08/2017 9:15' },
    { type: '电商', user: '姚**云', detail: '左邻小站消费', amount: '50', payment: '微信', time: '23/08/2017 9:15' },
    { type: '电商', user: '韦**', detail: '左邻小站消费', amount: '30', payment: '微信', time: '24/08/2017 10:05' },
    { type: '电商', user: '林**', detail: '能量加油站消费', amount: '60', payment: '支付宝', time: '18/08/2017 10:30' },
    { type: '停车费', user: '李**', detail: '月卡充值', amount: '800', payment: '支付宝', time: '18/08/2017 11:30' },
    { type: '停车费', user: '何**辉', detail: '临时卡缴费', amount: '100', payment: '微信', time: '18/08/2017 12:30' },
    { type: '物业费', user: '深圳市永佳****有限公司', detail: '*月份物业费', amount: '5000', payment: '微信', time: '18/08/2017 13:30' },
    { type: '会议室预定', user: '林**', detail: '预定**资源', amount: '200', payment: '微信', time: '18/08/2017 14:30' },
    { type: '租金', user: '深圳市永佳****有限公司', detail: '*月份租金', amount: '70000', payment: '支付宝', time: '18/08/2017 15:30' },
    { type: '电商', user: '王**', detail: '左邻小站消费', amount: '20', payment: '微信', time: '23/08/2017 9:15' },
    { type: '租金', user: '嘉兴维娃斯****有限公司', detail: '*月份租金', amount: '50000', payment: '支付宝', time: '19/08/2017 15:30' },
    { type: '租金', user: '嘉兴珍妮纺****有限公司', detail: '*月份租金', amount: '80000', payment: '支付宝', time: '19/08/2017 12:20' },
    { type: '租金', user: '深圳永佳****有限公司', detail: '*月份租金', amount: '70000', payment: '支付宝', time: '24/08/2017 9:00' },
    { type: '电商', user: '姚**云', detail: '能量加油站消费', amount: '20', payment: '支付宝', time: '23/08/2017 9:15' },
    { type: '电商', user: '姚**云', detail: '左邻小站消费', amount: '50', payment: '微信', time: '23/08/2017 9:15' },
    { type: '电商', user: '韦**', detail: '左邻小站消费', amount: '30', payment: '微信', time: '24/08/2017 10:05' },
    { type: '电商', user: '林**', detail: '能量加油站消费', amount: '60', payment: '支付宝', time: '18/08/2017 10:30' },
    { type: '停车费', user: '李**', detail: '月卡充值', amount: '800', payment: '支付宝', time: '18/08/2017 11:30' },
    { type: '停车费', user: '何**辉', detail: '临时卡缴费', amount: '100', payment: '微信', time: '18/08/2017 12:30' },
    { type: '物业费', user: '深圳市永佳****有限公司', detail: '*月份物业费', amount: '5000', payment: '微信', time: '18/08/2017 13:30' },
    { type: '会议室预定', user: '林**', detail: '预定**资源', amount: '200', payment: '微信', time: '18/08/2017 14:30' },
    { type: '租金', user: '深圳市永佳****有限公司', detail: '*月份租金', amount: '70000', payment: '支付宝', time: '18/08/2017 15:30' },
    { type: '电商', user: '王**', detail: '左邻小站消费', amount: '20', payment: '微信', time: '23/08/2017 9:15' },
    { type: '租金', user: '嘉兴维娃斯****有限公司', detail: '*月份租金', amount: '50000', payment: '支付宝', time: '19/08/2017 15:30' },
    { type: '租金', user: '嘉兴珍妮纺****有限公司', detail: '*月份租金', amount: '80000', payment: '支付宝', time: '19/08/2017 12:20' },
  ];

class Two extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    callApi({
      api: 'parkorder',
      success: () => {

      }
    });
  }


  render() {
    const { title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content">
          <CarouselTable columns={columns} data={DATA} />
        </div>
      </Widget>
    );
  }
}

export default Two;
