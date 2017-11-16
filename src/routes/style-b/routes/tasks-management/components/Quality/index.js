import React, { Component } from 'react';
import { Widget, Histogram } from 'routes/home/components';
import callApi from 'routes/home/api';
import G2, { Stat } from 'g2';

class Quality extends Component {
  constructor(props) {
    super(props);

    const data = [
      { type: '任务完成率', data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4] },
      { type: '响应及时率', data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3] }
    ];
    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      var datas = item.data;
      var months = ['物业巡检', '品质核查'];
      for (var j = 0; j < datas.length; j++) {
        item[months[j]] = datas[j];
      }
      data[i] = item;
    }
    var Frame = G2.Frame;
    var frame = new Frame(data);
    frame = Frame.combinColumns(frame, ['物业巡检', '品质核查'], 'value', 'name', 'type');
    this.state = { data: frame };
  }

  render() {
    return (
      <Widget className="quality" title='今日任务完成质量'>
        <Histogram
          transpose
          noTitle
          hasLegend
          data={this.state.data}
          plotCfg={{ margin: [10, 20, 45, 50] }}
          colX={{
            formatter: dimValue => `${dimValue}月`
          }}
          colY={{
            type: 'linear',
            // alias: null
          }}
        />
      </Widget>
    );
  }
}

export default Quality;
