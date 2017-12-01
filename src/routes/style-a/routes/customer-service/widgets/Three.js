import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, PieChart } from 'components';
import config from 'config';
import callApi from 'api';

class Three extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "type": "电脑维修",
          "value": 32
        },
        {
          "type": "装修",
          "value": 32
        },
        {
          "type": "迁入申请",
          "value": 54
        },
        {
          "type": "工位预定",
          "value": 45
        },
        {
          "type": "月卡申请",
          "value": 92
        },
        {
          "type": "物业报修",
          "value": 40
        },
        {
          "type": "物品放行",
          "value": 40
        },
        {
          "type": "企业增值服务",
          "value": 40
        },
        {
          "type": "其他",
          "value": 32
        },
      ].map(({ type, value }) => ({ name: type, value: Number(value) }))
    };
  }


  render() {
    const { title, size } = this.props;
    return (
      <Widget>
        <Title value={title[0]} />
        <div className="widget-content chart">
          <PieChart data={this.state.data} height={size[1] - 100} />
        </div>
      </Widget>
    );
  }
}

export default Three;
