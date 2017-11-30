import React, { Component } from 'react';
import { Widget, Title, NumberCard, Histogram } from 'components';
import callApi from 'api';

class Six extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "name": "装修", "value": "7.51" },
        { "name": "迁入申请", "value": "5.67" },
        { "name": "工位预定", "value": "5.17" },
        { "name": "月卡申请", "value": "3.12" },
        { "name": "物业报修", "value": "4.22" },
        { "name": "物品放行", "value": "1.12" },
        { "name": "企业增值服务", "value": "6.66" }
      ]
    };
  }

  render() {
    const { title, size } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart">
          <Histogram
            data={this.state.data}
            height={size[1] - 50}
            width={size[0]}
            colX={{
              formatter: dimValue => `${dimValue}月`
            }}
            colY={{
              type: 'linear',
              alias: '单位:天'
            }}
          />
        </div>
      </Widget>
    );
  }
}

export default Six;
