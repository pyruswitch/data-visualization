import React, { Component } from 'react';
import { Widget, CarouselTable } from 'routes/home/components';
import callApi from 'routes/home/api';

const columns = [
  { title: '任务类型', width: 'col-2', key: 'type' },
  { title: '任务详情', width: 'col-4', key: 'content' },
  { title: '处理人', width: 'col-2', key: 'name' },
  { title: '任务状态', width: 'col-2', key: 'state' },
  { title: '发起时间', width: 'col-2', key: 'date' },
];

class LatestVerficationTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "state": "巡检完成", "content": "用户13800******申请工位", "type": "物业巡检", "name": "欧阳**雪", "date": "24/08/2017" },
        { "state": "巡检完成", "content": "用户13800******提交新的投诉建议", "type": "物业巡检", "name": "欧阳**雪", "date": "22/08/2017" },
        { "state": "巡检完成", "content": "科技园B栋楼梯间报修任务", "type": "物业巡检", "name": "欧阳**雪", "date": "22/08/2017" },
        { "state": "巡检完成", "content": "科技园B栋公共设备报修任务", "type": "物业巡检", "name": "欧阳**雪", "date": "21/08/2017" },
        { "state": "巡检完成", "content": "用户13800******申请加入公司****", "type": "物业巡检", "name": "欧阳**雪", "date": "18/08/2017" },
        { "state": "巡检完成", "content": "用户13800******申请月卡充值", "type": "物业巡检", "name": "欧阳**雪", "date": "17/08/2017" },
        { "state": "巡检完成", "content": "用户13800******申请工位", "type": "物业巡检", "name": "欧阳**雪", "date": "16/08/2017" },
        { "state": "巡检完成", "content": "用户13800******提交新的投诉建议", "type": "物业巡检", "name": "欧阳**雪", "date": "15/08/2017" },
        { "state": "巡检完成", "content": "科技园B栋楼梯间报修任务", "type": "物业巡检", "name": "欧阳**雪", "date": "14/08/2017" },
        { "state": "巡检完成", "content": "科技园B栋公共设备报修任务", "type": "物业巡检", "name": "欧阳**雪", "date": "11/08/2017" },
        { "state": "巡检完成", "content": "用户13800******申请加入公司****", "type": "物业巡检", "name": "欧阳**雪", "date": "11/08/2017" },
        { "state": "巡检完成", "content": "用户13800******申请月卡充值", "type": "物业巡检", "name": "欧阳**雪", "date": "09/08/2017" },
        { "state": "巡检完成", "content": "用户13800******申请月卡充值", "type": "物业巡检", "name": "欧阳**雪", "date": "08/08/2017" }
      ]
    };
  }

  render() {
    return (
      <Widget className="latest-verfication-tasks" title='最新核查任务'>
        <CarouselTable
          columns={columns}
          data={this.state.data}
        />
      </Widget>
    );
  }
}

export default LatestVerficationTasks;
