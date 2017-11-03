import React, { Component } from 'react';
import { Widget, Histogram } from 'routes/home/components';
import callApi from 'routes/home/api';
// {"errorCode": "200", "errorDescription": "OK", "response": [{"name": "公寓与住宅", "value": "0.68"}, {"name": "单身公寓33栋", "value": "0.95"}, {"name": "商铺", "value": "0.50"}, {"name": "普通办公厂房", "value": "0.73"}, {"name": "生产力大楼", "value": "0.53"}, {"name": "科技工业大厦", "value": "0.49"}, {"name": "金融基地", "value": "0.29"}, {"name": "金融科技大厦", "value": "0.21"}]}
class OccupancyRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "name": "公寓与住宅", "value": "0.68" },
        { "name": "单身公寓33栋", "value": "0.95" },
        { "name": "商铺", "value": "0.50" },
        { "name": "普通办公厂房", "value": "0.73" },
        { "name": "生产力大楼", "value": "0.53" },
        { "name": "科技工业大厦", "value": "0.49" },
        { "name": "金融基地", "value": "0.29" },
        { "name": "金融科技大厦", "value": "0.21" }
      ].map(({ name, value }) => ({ name, value: Number(value) * 100 }))
    };
  }

  // componentDidMount() {
  //   callApi({
  //     api: 'occupancyrate',
  //     success: (response) => {
  //       const data = response.map(({ name, value }) => ({ name, value: Number(value) * 100 }));
  //       this.setState({ data });
  //     }
  //   });
  // }

  render() {
    return (
      <Widget className="occupancy-rate" title='入驻率'>
        <Histogram
          data={this.state.data}
          colY={{
            type: 'linear',
            alias: '百分比',
            formatter: dimValue => `${dimValue}%`
          }}
        />
      </Widget>
    );
  }
}

export default OccupancyRate;
