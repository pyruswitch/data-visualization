import React, { Component } from 'react';
import { Box, NumberCard, Widget, CarouselTable } from 'components';
import callApi from 'api';

const columns = [
  { title: '订单类型', width: 'col-2', key: 'ordertype' },
  { title: '客户', width: 'col-3', key: 'name' },
  { title: '金额(元)', width: 'col-2', key: 'payamount' },
  { title: '支付方式', width: 'col-2', key: 'paychannel' },
  { title: '时间', width: 'col-3', key: 'paydate' },
];

class LastestOrder extends Component {
  constructor(props) {
    super(props);
    let types = { wechat: '微信', alipay: '支付宝' };
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    callApi({
      api: 'parkorder',
      success: (response) => {
        let types = { wechat: '微信', alipay: '支付宝' };
        const data = response.map(({ paychannel, ...rest }) =>
          ({ paychannel: types[paychannel], ...rest })
        );
        this.setState({ data });
      }
    });
  }

  render() {
    return (
      <Widget className="lastest-order" title='最新订单'>
        <CarouselTable data={this.state.data} columns={columns} />
      </Widget>
    );
  }
}

export default LastestOrder;


// [{ "ordertype": "电商", "paydate": "10-31 08:08", "payamount": 7.0, "paychannel": "wechat", "name": "小美" }, { "ordertype": "电商", "paydate": "10-30 16:04", "payamount": 3.5, "paychannel": "alipay", "name": "小希" }, { "ordertype": "电商", "paydate": "10-30 13:01", "payamount": 3.0, "paychannel": "wechat", "name": "小美" }, { "ordertype": "电商", "paydate": "10-30 11:11", "payamount": 3.8, "paychannel": "alipay", "name": "小希" }, { "ordertype": "电商", "paydate": "10-30 11:11", "payamount": 19.0, "paychannel": "wechat", "name": "joshua" }, { "ordertype": "电商", "paydate": "10-30 11:11", "payamount": 15.8, "paychannel": "wechat", "name": "柳巴巴" }, { "ordertype": "电商", "paydate": "10-30 10:10", "payamount": 110.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-30 09:09", "payamount": 6.0, "paychannel": "alipay", "name": "Yuki" }, { "ordertype": "电商", "paydate": "10-30 09:09", "payamount": 3.0, "paychannel": "wechat", "name": "冥" }, { "ordertype": "电商", "paydate": "10-30 08:08", "payamount": 14.0, "paychannel": "wechat", "name": "艾斯" }, { "ordertype": "电商", "paydate": "10-28 14:02", "payamount": 3.0, "paychannel": "wechat", "name": "冥" }, { "ordertype": "停车缴费", "paydate": "10-27 19:07", "payamount": 40.0, "paychannel": "alipay", "name": null }, { "ordertype": "电商", "paydate": "10-27 17:05", "payamount": 15.9, "paychannel": "wechat", "name": "哦" }, { "ordertype": "电商", "paydate": "10-27 16:04", "payamount": 6.5, "paychannel": "wechat", "name": "芬芳" }, { "ordertype": "电商", "paydate": "10-27 16:04", "payamount": 1.7, "paychannel": "wechat", "name": "芬芳" }, { "ordertype": "电商", "paydate": "10-27 15:03", "payamount": 3.5, "paychannel": "alipay", "name": "小希" }, { "ordertype": "电商", "paydate": "10-27 15:03", "payamount": 4.0, "paychannel": "wechat", "name": "小美" }, { "ordertype": "电商", "paydate": "10-27 15:03", "payamount": 10.8, "paychannel": "wechat", "name": "马少" }, { "ordertype": "电商", "paydate": "10-27 15:03", "payamount": 3.5, "paychannel": "wechat", "name": "冥" }, { "ordertype": "电商", "paydate": "10-27 12:12", "payamount": 10.0, "paychannel": "alipay", "name": "小贤" }, { "ordertype": "电商", "paydate": "10-27 10:10", "payamount": 107.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-27 09:09", "payamount": 7.5, "paychannel": "alipay", "name": "小希" }, { "ordertype": "停车缴费", "paydate": "10-26 19:07", "payamount": 43.0, "paychannel": "alipay", "name": null }, { "ordertype": "电商", "paydate": "10-26 19:07", "payamount": 11.5, "paychannel": "wechat", "name": "明" }, { "ordertype": "电商", "paydate": "10-26 19:07", "payamount": 10.5, "paychannel": "wechat", "name": "明" }, { "ordertype": "电商", "paydate": "10-26 18:06", "payamount": 2.5, "paychannel": "wechat", "name": "Johnnu" }, { "ordertype": "电商", "paydate": "10-26 11:11", "payamount": 18.0, "paychannel": "alipay", "name": "没有昵称" }, { "ordertype": "电商", "paydate": "10-26 10:10", "payamount": 7.5, "paychannel": "alipay", "name": "琳琳" }, { "ordertype": "电商", "paydate": "10-26 10:10", "payamount": 63.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-26 10:10", "payamount": 31.6, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-26 09:09", "payamount": 3.0, "paychannel": "alipay", "name": "小希" }, { "ordertype": "电商", "paydate": "10-25 19:07", "payamount": 3.5, "paychannel": "wechat", "name": "荣融" }, { "ordertype": "停车缴费", "paydate": "10-25 18:06", "payamount": 37.0, "paychannel": "alipay", "name": null }, { "ordertype": "电商", "paydate": "10-25 17:05", "payamount": 7.8, "paychannel": "wechat", "name": "Angle" }, { "ordertype": "电商", "paydate": "10-25 17:05", "payamount": 1.7, "paychannel": "wechat", "name": "杨旭东" }, { "ordertype": "电商", "paydate": "10-25 15:03", "payamount": 5.5, "paychannel": "wechat", "name": "天耳" }, { "ordertype": "电商", "paydate": "10-25 14:02", "payamount": 6.5, "paychannel": "wechat", "name": "马少" }, { "ordertype": "电商", "paydate": "10-25 13:01", "payamount": 7.5, "paychannel": "wechat", "name": "Zoey" }, { "ordertype": "停车缴费", "paydate": "10-25 11:11", "payamount": 1200.0, "paychannel": "wechat", "name": null }, { "ordertype": "电商", "paydate": "10-25 11:11", "payamount": 19.0, "paychannel": "wechat", "name": "joshua" }, { "ordertype": "电商", "paydate": "10-25 11:11", "payamount": 3.8, "paychannel": "alipay", "name": "小希" }, { "ordertype": "电商", "paydate": "10-25 10:10", "payamount": 107.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-25 09:09", "payamount": 3.8, "paychannel": "wechat", "name": "洋洋羊" }, { "ordertype": "电商", "paydate": "10-25 07:07", "payamount": 3.5, "paychannel": "alipay", "name": "小希" }, { "ordertype": "电商", "paydate": "10-24 23:11", "payamount": 5.0, "paychannel": "wechat", "name": "洋洋羊" }, { "ordertype": "停车缴费", "paydate": "10-24 20:08", "payamount": 43.0, "paychannel": "alipay", "name": null }, { "ordertype": "电商", "paydate": "10-24 19:07", "payamount": 21.0, "paychannel": "wechat", "name": "你好" }, { "ordertype": "电商", "paydate": "10-24 16:04", "payamount": 8.0, "paychannel": "wechat", "name": "Angle" }, { "ordertype": "电商", "paydate": "10-24 12:12", "payamount": 4.0, "paychannel": "wechat", "name": "妹妹" }, { "ordertype": "电商", "paydate": "10-24 11:11", "payamount": 19.0, "paychannel": "wechat", "name": "joshua" }, { "ordertype": "电商", "paydate": "10-24 11:11", "payamount": 44.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-24 11:11", "payamount": 15.8, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-24 11:11", "payamount": 31.6, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-23 20:08", "payamount": 3.5, "paychannel": "wechat", "name": "冥" }, { "ordertype": "电商", "paydate": "10-23 17:05", "payamount": 2.5, "paychannel": "wechat", "name": "Zoey" }, { "ordertype": "电商", "paydate": "10-23 11:11", "payamount": 18.0, "paychannel": "wechat", "name": "伍珊珊" }, { "ordertype": "电商", "paydate": "10-23 11:11", "payamount": 18.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-23 11:11", "payamount": 66.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-23 11:11", "payamount": 18.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-23 11:11", "payamount": 18.0, "paychannel": "alipay", "name": "没有昵称" }, { "ordertype": "电商", "paydate": "10-23 10:10", "payamount": 19.0, "paychannel": "wechat", "name": "joshua" }, { "ordertype": "电商", "paydate": "10-23 10:10", "payamount": 2.5, "paychannel": "wechat", "name": "你好" }, { "ordertype": "电商", "paydate": "10-23 09:09", "payamount": 5.5, "paychannel": "alipay", "name": "小希" }, { "ordertype": "电商", "paydate": "10-22 14:02", "payamount": 3.5, "paychannel": "wechat", "name": "警长" }, { "ordertype": "电商", "paydate": "10-22 11:11", "payamount": 3.0, "paychannel": "wechat", "name": "警长" }, { "ordertype": "电商", "paydate": "10-22 09:09", "payamount": 4.6, "paychannel": "wechat", "name": "匿名" }, { "ordertype": "电商", "paydate": "10-20 12:12", "payamount": 18.0, "paychannel": "wechat", "name": "伍珊珊" }, { "ordertype": "电商", "paydate": "10-20 11:11", "payamount": 19.0, "paychannel": "wechat", "name": "joshua" }, { "ordertype": "电商", "paydate": "10-20 11:11", "payamount": 66.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-20 11:11", "payamount": 49.6, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-20 10:10", "payamount": 5.5, "paychannel": "alipay", "name": "小希" }, { "ordertype": "电商", "paydate": "10-20 10:10", "payamount": 5.0, "paychannel": "alipay", "name": "brade" }, { "ordertype": "电商", "paydate": "10-19 20:08", "payamount": 3.8, "paychannel": "wechat", "name": "荣融" }, { "ordertype": "电商", "paydate": "10-19 20:08", "payamount": 3.8, "paychannel": "wechat", "name": "荣融" }, { "ordertype": "电商", "paydate": "10-19 18:06", "payamount": 18.0, "paychannel": "wechat", "name": "伍珊珊" }, { "ordertype": "电商", "paydate": "10-19 15:03", "payamount": 6.0, "paychannel": "alipay", "name": "马少" }, { "ordertype": "电商", "paydate": "10-19 11:11", "payamount": 22.0, "paychannel": "wechat", "name": "吃个饭都那么麻烦" }, { "ordertype": "电商", "paydate": "10-19 11:11", "payamount": 15.8, "paychannel": "wechat", "name": "joshua" }, { "ordertype": "电商", "paydate": "10-19 11:11", "payamount": 88.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-19 11:11", "payamount": 18.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-19 11:11", "payamount": 18.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-19 10:10", "payamount": 18.0, "paychannel": "alipay", "name": "没有昵称" }, { "ordertype": "电商", "paydate": "10-19 09:09", "payamount": 4.5, "paychannel": "alipay", "name": "小希" }, { "ordertype": "电商", "paydate": "10-19 09:09", "payamount": 18.0, "paychannel": "alipay", "name": "我是韦韦" }, { "ordertype": "电商", "paydate": "10-19 08:08", "payamount": 2.5, "paychannel": "wechat", "name": "明" }, { "ordertype": "电商", "paydate": "10-19 08:08", "payamount": 3.9, "paychannel": "wechat", "name": "帆帆" }, { "ordertype": "电商", "paydate": "10-18 21:09", "payamount": 5.0, "paychannel": "wechat", "name": "权哥" }, { "ordertype": "电商", "paydate": "10-18 19:07", "payamount": 15.2, "paychannel": "alipay", "name": "陈丽媛" }, { "ordertype": "电商", "paydate": "10-18 18:06", "payamount": 2.0, "paychannel": "wechat", "name": "杨旭东" }, { "ordertype": "电商", "paydate": "10-18 14:02", "payamount": 2.5, "paychannel": "wechat", "name": "马少" }, { "ordertype": "电商", "paydate": "10-18 11:11", "payamount": 88.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-18 11:11", "payamount": 18.0, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-18 11:11", "payamount": 15.8, "paychannel": "wechat", "name": "HT" }, { "ordertype": "电商", "paydate": "10-18 10:10", "payamount": 19.0, "paychannel": "wechat", "name": "joshua" }, { "ordertype": "电商", "paydate": "10-18 09:09", "payamount": 19.0, "paychannel": "alipay", "name": "没有昵称" }, { "ordertype": "电商", "paydate": "10-17 23:11", "payamount": 7.5, "paychannel": "wechat", "name": "洋洋羊" }, { "ordertype": "电商", "paydate": "10-17 23:11", "payamount": 18.0, "paychannel": "alipay", "name": "权灵" }, { "ordertype": "电商", "paydate": "10-17 19:07", "payamount": 1.5, "paychannel": "wechat", "name": "Liying乐乐" }, { "ordertype": "电商", "paydate": "10-17 19:07", "payamount": 4.5, "paychannel": "wechat", "name": "Liying乐乐" }, { "ordertype": "停车缴费", "paydate": "10-17 19:07", "payamount": 40.0, "paychannel": "alipay", "name": null }].map(({ paychannel, ...rest }) => ({ paychannel: types[paychannel], ...rest }))
