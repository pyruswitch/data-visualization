import React, { Component } from 'react';
import { Widget, DonutChart } from 'routes/home/components';
import callApi from 'routes/home/api';

class IndustryAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "name": "软件行业",
          "value": 495
        },
        {
          "name": "电子行业",
          "value": 390
        },
        {
          "name": "房地产类",
          "value": 150
        },
        {
          "name": "健康与医疗",
          "value": 133
        },
        {
          "name": "服务行业",
          "value": 105
        },
        {
          "name": "其他",
          "value": 98
        }
      ]
    };
  }

  // componentDidMount() {
  //   callApi({
  //     api: "Companytype",
  //     success: (response) => {
  //       console.log(response);
  //     }
  //   });
  // }


  render() {
    return (
      <Widget className="industry-analysis" title='行业分析'>
        <DonutChart data={this.state.data} />
      </Widget>
    );
  }
}

export default IndustryAnalysis;
