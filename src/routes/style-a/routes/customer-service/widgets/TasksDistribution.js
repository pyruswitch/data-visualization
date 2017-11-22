import React, { Component } from 'react';
import G2 from 'g2';
import { Widget, StackedBarChart, Title } from 'components';
import callApi from 'api';

class TasksDistribution extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'taskstatus',
      success: (response) => {
        const data = response.map(({ value, ...rest }) =>
          ({ value: Number(value), ...rest })
        );
        this.setState({ data });
      }
    });
  }

  render() {
    return (
      <Widget className="tasks-distribution" >
        <Title value='任务分布' />
        <div className='widget-content chart'>
          <StackedBarChart data={this.state.data} />
        </div>
      </Widget>
    );
  }
}

export default TasksDistribution;

// [
//   { "name": "装修", "value": 15, "status": "待处理" },
//   { "name": "迁入申请", "value": 18, "status": "待处理" },
//   { "name": "工位预定", "value": 17, "status": "待处理" },
//   { "name": "月卡申请", "value": 23, "status": "待处理" },
//   { "name": "物业报修", "value": 17, "status": "待处理" },
//   { "name": "物品放行", "value": 15, "status": "待处理" },
//   { "name": "企业增值服务", "value": 21, "status": "待处理" },
//   { "name": "装修", "value": 32, "status": "处理中" },
//   { "name": "迁入申请", "value": 29, "status": "处理中" },
//   { "name": "工位预定", "value": 37, "status": "处理中" },
//   { "name": "月卡申请", "value": 43, "status": "处理中" },
//   { "name": "物业报修", "value": 24, "status": "处理中" },
//   { "name": "物品放行", "value": 21, "status": "处理中" },
//   { "name": "企业增值服务", "value": 31, "status": "处理中" },
//   { "name": "装修", "value": 75, "status": "已完成" },
//   { "name": "迁入申请", "value": 87, "status": "已完成" },
//   { "name": "工位预定", "value": 71, "status": "已完成" },
//   { "name": "月卡申请", "value": 85, "status": "已完成" },
//   { "name": "物业报修", "value": 51, "status": "已完成" },
//   { "name": "物品放行", "value": 47, "status": "已完成" },
//   { "name": "企业增值服务", "value": 63, "status": "已完成" },
// ]
