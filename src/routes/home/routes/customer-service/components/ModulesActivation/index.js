import React, { Component } from 'react';
import { Widget, RadarChart } from 'routes/home/components';
import G2, { Stat } from 'g2';
import callApi from 'routes/home/api';
// WiFi热点	5555
// 门禁	5210
// 物品放行	4333
// 云打印	3888
// 停车缴费	3770
// 物业缴费	3110
// 物业报修	1760
// 会议室预定	1666
// 招租管理	1351
// 工位预定	1312
// 快递服务	1255
class ModulesActivation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "name": "WiFi热点", "value": "5555" },


        { "name": "云打印", "value": "3888" },
        { "name": "停车缴费", "value": "3770" },
        { "name": "物业缴费", "value": "3110" },
        { "name": "物业报修", "value": "1760" },
        { "name": "会议室预定", "value": "1666" },
        { "name": "物品放行", "value": "4333" },
        { "name": "招租管理", "value": "1351" },
        { "name": "工位预定", "value": "2312" },
        { "name": "门禁", "value": "3210" },
        { "name": "快递服务", "value": "1255" }
      ].map(({ name, value }) => (Object.assign({}, { name: 'aha' }, { categories: name, value })))
    };
  }

  // componentDidMount() {
  //   callApi({
  //     api: 'boardvita',
  //     success: (response) => {
  //       const data = response.map(({ name, value }) => (Object.assign({}, { name: 'aha' }, { categories: name, value })));
  //       this.setState({ data });
  //     }
  //   });
  // }

  render() {
    return (
      <Widget className="modules-activation" title='服务模块活跃度'>
        <RadarChart data={this.state.data} />
      </Widget>
    );
  }
}

export default ModulesActivation;

