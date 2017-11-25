
import React, { Component } from 'react';
import { Widget, LineChart, Title } from 'components';
import callApi from 'api';
import config from 'config';
const { height } = config;

class Four extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "value": 76, "name": "01" },
        { "value": 149, "name": "02" },
        { "value": 213, "name": "03" },
        { "value": 48, "name": "04" },
        { "value": 99, "name": "05" },
        { "value": 87, "name": "06" },
        { "value": 71, "name": "07" },
        { "value": 6, "name": "08" },
        { "value": 53, "name": "09" },
        { "value": 35, "name": "10" },
        { "value": 35, "name": "11" },
        { "name": "12" },
      ]
    };
  }

  componentDidMount() {
    // callApi({
    //   api: 'buildmonthwatermeter',
    //   success: (response) => {
    //     const data = response.map(({ buildno, month, value }) => (
    //       { name: `${month}月`, value: Number(value), status: `${buildno}楼栋` }
    //     ));
    //     this.setState({ data });
    //   }
    // });
  }

  render() {
    const { size, title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart">
          <LineChart
            data={this.state.data}
            colX={{
              formatter: (dimValue) => (`${dimValue}月`)
            }}
            width={size[0]}
            height={size[1] - 150}
          />
        </div>
      </Widget>
    );
  }
}

export default Four;

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
