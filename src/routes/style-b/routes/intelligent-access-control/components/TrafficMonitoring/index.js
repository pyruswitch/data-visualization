import React, { Component } from 'react';
import { Widget, CarouselTable } from 'routes/home/components';
import { callApi } from 'utils';
import api from 'routes/home/api';
const columns = [
  { title: '类型名称', width: 'col-3', key: 'name' },
  { title: '内容', width: 'col-6', key: 'content' },
  { title: '日期', width: 'col-3', key: 'date' }
];
class TrafficMonitoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "content": "用户13800******申请工位", "name": "工位预定", "date": "24/08/2017" },
        { "content": "用户13800******提交新的投诉建议", "name": "投诉建议", "date": "22/08/2017" },
        { "content": "科技园B栋楼梯间报修任务", "name": "物业报修", "date": "22/08/2017" },
        { "content": "科技园B栋公共设备报修任务", "name": "物业报修", "date": "21/08/2017" },
        { "content": "用户13800******申请加入公司****", "name": "企业认证", "date": "18/08/2017" },
        { "content": "用户13800******申请月卡充值", "name": "停车缴费", "date": "17/08/2017" },
        { "content": "用户13800******申请工位", "name": "工位预定", "date": "16/08/2017" },
        { "content": "用户13800******提交新的投诉建议", "name": "投诉建议", "date": "15/08/2017" },
        { "content": "科技园B栋楼梯间报修任务", "name": "物业报修", "date": "14/08/2017" },
        { "content": "科技园B栋公共设备报修任务", "name": "物业报修", "date": "11/08/2017" },
        { "content": "用户13800******申请加入公司****", "name": "企业认证", "date": "11/08/2017" },
        { "content": "用户13800******申请月卡充值", "name": "停车缴费", "date": "09/08/2017" },
        { "content": "用户13800******申请月卡充值", "name": "停车缴费", "date": "08/08/2017" }
      ]
    };
  }

  render() {
    return (
      <Widget className="traffic-monitoring" title='实时人流量监控'>
        <CarouselTable
          columns={columns}
          data={this.state.data}
        />
      </Widget>
    );
  }
}

export default TrafficMonitoring;
