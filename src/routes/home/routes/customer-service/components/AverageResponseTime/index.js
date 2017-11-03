import React, { Component } from 'react';
import { Widget, Histogram } from 'routes/home/components';
import callApi from 'routes/home/api';

class AverageResponseTime extends Component {
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

  // componentDidMount() {
  //   callApi({
  //     api: 'tasktyperespon',
  //     success: (response) => {
  //       this.setState({ data: response });
  //     }
  //   });
  // }

  render() {
    return (
      <Widget className="average-response-time" title='平均响应时间'>
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
// {"errorCode": "200", "errorDescription": "OK", "response": [{"name": "五金类", "value": "0.5"}, {"name": "会议室预约", "value": "1.9"}, {"name": "其他", "value": "0.8"}, {"name": "其它类", "value": "0.0"}, {"name": "土建类", "value": "0.0"}, {"name": "弱电类", "value": "0.0"}, {"name": "强电类", "value": "0.0"}, {"name": "水工类", "value": "0.0"}, {"name": "水电维修", "value": "0.3"}, {"name": "电梯维修", "value": "0.0"}]}
