import React, { Component } from 'react';
import G2 from 'g2';
import { Widget, StackedBarChart } from 'routes/home/components';
import callApi from 'routes/home/api';
// 装修	753	1
// 迁入申请	875	1
// 工位预定	712	1
// 月卡申请	850	1
// 物业报修	513	1
// 物品放行	471	1
// 企业增值服务	633	1
// 装修	323	2
// 迁入申请	299	2
// 工位预定	372	2
// 月卡申请	431	2
// 物业报修	244	2
// 物品放行	211	2
// 企业增值服务	318	2
// 装修	157	3
// 迁入申请	181	3
// 工位预定	173	3
// 月卡申请	232	3
// 物业报修	171	3
// 物品放行	151	3
// 企业增值服务	213	3
class TasksDistribution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "name": "装修", "value": 15, "status": "待处理" },
        { "name": "迁入申请", "value": 18, "status": "待处理" },
        { "name": "工位预定", "value": 17, "status": "待处理" },
        { "name": "月卡申请", "value": 23, "status": "待处理" },
        { "name": "物业报修", "value": 17, "status": "待处理" },
        { "name": "物品放行", "value": 15, "status": "待处理" },
        { "name": "企业增值服务", "value": 21, "status": "待处理" },
        { "name": "装修", "value": 32, "status": "处理中" },
        { "name": "迁入申请", "value": 29, "status": "处理中" },
        { "name": "工位预定", "value": 37, "status": "处理中" },
        { "name": "月卡申请", "value": 43, "status": "处理中" },
        { "name": "物业报修", "value": 24, "status": "处理中" },
        { "name": "物品放行", "value": 21, "status": "处理中" },
        { "name": "企业增值服务", "value": 31, "status": "处理中" },
        { "name": "装修", "value": 75, "status": "已完成" },
        { "name": "迁入申请", "value": 87, "status": "已完成" },
        { "name": "工位预定", "value": 71, "status": "已完成" },
        { "name": "月卡申请", "value": 85, "status": "已完成" },
        { "name": "物业报修", "value": 51, "status": "已完成" },
        { "name": "物品放行", "value": 47, "status": "已完成" },
        { "name": "企业增值服务", "value": 63, "status": "已完成" },
      ]
    };
  }

  // componentDidMount() {
  //   callApi({
  //     api: 'taskstatus',
  //     success: (response) => {
  // const data = response.map(({ value, ...rest }) =>
  //   ({ value: Number(value), ...rest })
  // );
  //       this.setState({ data });
  //     }
  //   });
  // }

  render() {
    return (
      <Widget className="tasks-distribution" title='任务分布'>
        <StackedBarChart data={this.state.data} />
      </Widget>
    );
  }
}

export default TasksDistribution;
// {"errorCode": "200", "errorDescription": "OK", "response": [{"name": "五金类", "value": "4", "status": "处理中"}, {"name": "五金类", "value": "1", "status": "已完成"}, {"name": "会议室预约", "value": "107", "status": "处理中"}, {"name": "会议室预约", "value": "3", "status": "已完成"}, {"name": "会议室预约", "value": "5", "status": "已完成"}, {"name": "其他", "value": "9", "status": "处理中"}, {"name": "其他", "value": "4", "status": "已完成"}, {"name": "其它类", "value": "4", "status": "处理中"}, {"name": "其它类", "value": "1", "status": "已完成"}, {"name": "土建类", "value": "1", "status": "处理中"}, {"name": "左邻会议室", "value": "27", "status": "处理中"}, {"name": "弱电类", "value": "1", "status": "处理中"}, {"name": "弱电类", "value": "1", "status": "已完成"}, {"name": "强电类", "value": "3", "status": "处理中"}, {"name": "招租管理", "value": "14", "status": "初始化"}, {"name": "招租管理", "value": "20", "status": "处理中"}, {"name": "服务联盟", "value": "3", "status": "处理中"}, {"name": "服务联盟运营模块", "value": "3", "status": "处理中"}, {"name": "水工类", "value": "3", "status": "处理中"}, {"name": "水工类", "value": "2", "status": "已完成"}, {"name": "水电维修", "value": "15", "status": "已完成"}, {"name": "电梯维修", "value": "3", "status": "处理中"}, {"name": "电梯维修", "value": "1", "status": "已完成"}]}
