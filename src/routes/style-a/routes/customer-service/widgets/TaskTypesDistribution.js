import React, { Component } from 'react';
import { Widget, PieChart, Title } from 'components';
import callApi from 'api';

class TaskTypesDistribution extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'tasktypecount',
      success: (response) => {
        const data = response.map(({ name, value }) => ({ name, value: Number(value) }));
        this.setState({ data });
      }
    });
  }

  render() {
    return (
      <Widget className="task-types-distribution">
        <Title value="任务类型分布" />
        <PieChart data={this.state.data} />
      </Widget>
    );
  }
}

export default TaskTypesDistribution;


// [
//   {
//     "type": "装修",
//     "value": 32
//   },
//   {
//     "type": "迁入申请",
//     "value": 54
//   },
//   {
//     "type": "工位预定",
//     "value": 45
//   },
//   {
//     "type": "月卡申请",
//     "value": 92
//   },
//   {
//     "type": "物业报修",
//     "value": 40
//   },
//   {
//     "type": "物品放行",
//     "value": 40
//   },
//   {
//     "type": "企业增值服务",
//     "value": 40
//   }
// ].map(({ type, value }) => ({ name: type, value: Number(value) }))
