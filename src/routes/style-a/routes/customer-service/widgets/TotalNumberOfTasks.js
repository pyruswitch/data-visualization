import React, { Component } from 'react';
import { Widget, NumberCard, LineChart, Title } from 'components';
import callApi from 'api';
import config from 'config';
class TotalNumberOfTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      chart: []
    };
  }

  componentDidMount() {
    callApi({
      api: 'taskclose',
      success: (response) => {
        this.setState({ number: response[0].value });
      }
    });
    callApi({
      api: 'daytaskorder',
      success: (response) => {
        const data = response.map(({ date, value }) =>
          ({ type: '2017', name: date, value })
        );
        this.setState({ chart: data });
      }
    });
  }

  render() {
    const { number, chart } = this.state;
    const { size } = this.props;
    return (
      <Widget className="total-number-of-tasks">
        <Title value='任务总数' />
        <div className="widget-content">
          <NumberCard value={number} type="number" />
          <LineChart
            data={chart}
            colX={{
              formatter: (dimValue) => (`${dimValue}月`)
            }}
            height={size[1] - 90}
          />
        </div>
      </Widget >
    );
  }
}

export default TotalNumberOfTasks;


// [
//   { "value": 76, "date": "01" },
//   { "value": 149, "date": "02" },
//   { "value": 213, "date": "03" },
//   { "value": 48, "date": "04" },
//   { "value": 99, "date": "05" },
//   { "value": 87, "date": "06" },
//   { "value": 71, "date": "07" },
//   { "value": 6, "date": "08" },
//   { "value": 53, "date": "09" },
//   { "value": 35, "date": "10" }
// ].map(({ date, value }) => ({ type: '2017', name: date, value }))
