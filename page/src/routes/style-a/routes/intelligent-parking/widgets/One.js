import React, { Component } from 'react';
import { Widget, DonutChart, Box, Title, NumberCard, Line, PieChart } from 'components';
import ReactGridLayout from 'react-grid-layout';
import { callApi } from 'utils';
import api from 'api';

class One extends Component {
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
    const { size, title } = this.props;
    return (
      <Widget>
        <ReactGridLayout
          cols={12}
          margin={[0, 0]}
          rowHeight={size[1] / 12}
          width={size[0]}
        >
          <div key="a" style={{ border: '1px solid red' }} className='chart' data-grid={{ x: 0, y: 0, w: 3, h: 12, static: true }}>
            <PieChart
              data={[{ "name": "总任务数", "value": 123 }, { "name": "已完成任务数", "value": 123 }]}
              inner={0.8}
              height={size[1] - 130}
              colors={['#2f2778', '#924ae1']}
              innerHTML={`<span>${(123 / 453).toFixed(2) * 100}%</span><span>总车位</span></div>`}
              plotCfg={{ margin: [0, 0, 0, 0] }}
            />
          </div>
          <div key="b" style={{ border: '1px solid red' }} data-grid={{ x: 3, y: 0, w: 9, h: 12, static: true }}>
            <Title value={title} />
            <div className="widget-content chart" style={{ paddingBottom: 0 }}>
            </div>
          </div>
        </ReactGridLayout>
      </Widget>
    );
  }
}

export default One;
