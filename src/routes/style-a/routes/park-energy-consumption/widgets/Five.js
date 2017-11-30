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
        { "value": 176, "name": "01" },
        { "value": 129, "name": "02" },
        { "value": 213, "name": "03" },
        { "value": 238, "name": "04" },
        { "value": 299, "name": "05" },
        { "value": 387, "name": "06" },
        { "value": 471, "name": "07" },
        { "value": 446, "name": "08" },
        { "value": 453, "name": "09" },
        { "value": 335, "name": "10" },
        { "value": 315, "name": "11" },
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
            colX={{ formatter: (dimValue) => (`${dimValue}月`) }}
            colY={{ alias: '单位：KW.H' }}
            width={size[0]}
            height={size[1] - 150}
          />
        </div>
      </Widget>
    );
  }
}

export default Five;
