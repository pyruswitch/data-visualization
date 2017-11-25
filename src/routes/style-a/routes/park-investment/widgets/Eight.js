import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, StackedBarChart } from 'components';
import config from 'config';
import callApi from 'api';

class Eight extends Component {
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
        { "name": "企业增值服务", "value": 21, "status": "待处理" }
      ]
    };
  }

  render() {
    const { size, title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart">
          <StackedBarChart
            height={size[1] - 50}
            width={size[0]}
            data={this.state.data}
          />
        </div>
      </Widget>
    );
  }
}

export default Eight;

