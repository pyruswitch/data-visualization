import React, { Component } from 'react';
import { Widget, LineChart } from 'components';
import { Frame, Stat } from 'g2';
import createG2 from 'g2-react';
import callApi from 'api';

class RentArea extends Component {
  constructor(props) {
    super(props);
    const data = [
      { "name": "01", "招租面积": 23.6, "在租面积": 20.9 },
      { "name": "02", "招租面积": 23.6, "在租面积": 20.9 },
      { "name": "03", "招租面积": 23.6, "在租面积": 20.9 },
      { "name": "04", "招租面积": 23.6, "在租面积": 22 },
      { "name": "05", "招租面积": 23.6, "在租面积": 22 },
      { "name": "06", "招租面积": 23.6, "在租面积": 21.6 },
      { "name": "07", "招租面积": 23.6, "在租面积": 21 },
      { "name": "08", "招租面积": 23.6, "在租面积": 20 },
      { "name": "09", "招租面积": 23.6, "在租面积": 21.6 },
      { "name": "10", "招租面积": 23.6, "在租面积": 22.2 },
    ];
    let frame = new Frame(data);
    frame = Frame.combinColumns(frame, ['招租面积', '在租面积'], 'value', 'type', 'name');
    this.state = { data: frame };
  }

  // componentDidMount() {
  //   callApi({
  //     api: 'montharea',
  //     success: (response) => {
  //       console.log('接口请求完成');
  //       const data1 = response.map((value) =>
  //         ({ name: value['月份'], type: '在租面积', value: value['在租面积'] })
  //       );
  //       const data2 = response.map((value) =>
  //         ({ name: value['月份'], type: '待租面积', value: value['待租面积'] }));

  //       console.log('数据处理完毕');

  //       this.setState({ data: [].concat(data1, data2) });
  //       console.log([].concat(data1, data2));
  //     }
  //   });
  // }


  render() {
    return (
      <Widget className="rent-area" title='在租面积/招租面积'>
        <LineChart
          colX={{
            range: [0, 1],
            formatter: (val) => {
              return val + '月';
            }
          }}
          plotCfg={{ margin: [10, 70, 30, 50] }}
          data={this.state.data}
        />
      </Widget>
    );
  }
}

export default RentArea;
