import React, { Component } from 'react';
import { Widget, StackedBarChart, Title, LineChart } from 'components';
import callApi from 'api';
import config from 'config';
const { height } = config;

class Five extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "value": 76, "name": "01" },
        { "value": 149, "name": "02" },
        { "value": 213, "name": "03" },
        { "value": 48, "name": "04" },
        { "value": 99, "name": "05" },
        { "value": 87, "name": "06" },
        { "value": 71, "name": "07" },
        { "value": 6, "name": "08" },
        { "value": 53, "name": "09" },
        { "value": 35, "name": "10" },
        { "value": 35, "name": "11" },
        { "name": "12" },
      ]
    };
  }

  componentDidMount() {
    // callApi({
    //   api: 'buildmonthelectr',
    //   success: (response) => {
    //     const data = response.map(({ buildno, month, value }) => (
    //       { name: `${month}月`, value: Number(value), status: `${buildno}楼栋` }
    //     ));
    //     this.setState({ data });
    //   }
    // });
  }

  render() {
    const { size, title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart">
          <LineChart
            data={this.state.data}
            colX={{
              formatter: (dimValue) => (`${dimValue}月`)
            }}
            width={size[0]}
            height={size[1] - 150}
          />
        </div>
      </Widget>
    );
  }
}

export default Five;
