import React, { Component } from 'react';
import { Widget, Histogram, Title } from 'components';
import callApi from 'api';

class AverageResponseTime extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'tasktyperespon',
      success: (response) => {
        this.setState({ data: response });
      }
    });
  }

  render() {
    return (
      <Widget className="average-response-time">
        <Title value="新注册用户" />
        <Histogram
          data={this.state.data}
          colX={{
            formatter: dimValue => `${dimValue}月`
          }}
          colY={{
            type: 'linear',
            alias: '单位:天'
          }}
        />
      </Widget>
    );
  }
}

export default AverageResponseTime;
// [
//   { "name": "装修", "value": "7.51" },
//   { "name": "迁入申请", "value": "5.67" },
//   { "name": "工位预定", "value": "5.17" },
//   { "name": "月卡申请", "value": "3.12" },
//   { "name": "物业报修", "value": "4.22" },
//   { "name": "物品放行", "value": "1.12" },
//   { "name": "企业增值服务", "value": "6.66" }
// ]
