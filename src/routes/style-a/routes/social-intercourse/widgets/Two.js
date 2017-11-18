import React, { Component } from 'react';
import { Widget, LineChart, Title } from 'components';
import config from 'config';
import callApi from 'api';


class Two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "value": 76, "date": "01" },
        { "value": 149, "date": "02" },
        { "value": 213, "date": "03" },
        { "value": 48, "date": "04" },
        { "value": 99, "date": "05" },
        { "value": 87, "date": "06" },
        { "value": 71, "date": "07" },
        { "value": 6, "date": "08" },
        { "value": 53, "date": "09" },
        { "value": 35, "date": "10" }
      ].map(({ date, value }) => ({ type: '2017', name: date, value }))
    };
  }

  componentDidMount() {
    // callApi({
    //   api: 'companyespon',
    //   success: (response) => {
    //     this.setState({ data: response });
    //     console.log(response);
    //   }
    // });
  }

  render() {
    const { size } = this.props;
    return (
      <Widget className="two" >
        <Title value="整体趋势图" />
        <LineChart
          data={this.state.data}
          colX={{
            formatter: (dimValue) => (`${dimValue}月`)
          }}
          height={size[1] - 50}
        />
      </Widget>
    );
  }
}

export default Two;
