import React, { Component } from 'react';
import { Widget, StackedBarChart } from 'components';
import callApi from 'api';
import config from 'config';
const { height } = config;

class PowerAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'buildmonthelectr',
      success: (response) => {
        const data = response.map(({ buildno, month, value }) => (
          { name: `${month}月`, value: Number(value), status: `${buildno}楼栋` }
        ));
        this.setState({ data });
      }
    });
  }

  render() {
    return (
      <Widget className="power-analysis" title='月度用电量分析'>
        <StackedBarChart
          height={height * 3}
          data={this.state.data}
        />
      </Widget>
    );
  }
}

export default PowerAnalysis;

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
