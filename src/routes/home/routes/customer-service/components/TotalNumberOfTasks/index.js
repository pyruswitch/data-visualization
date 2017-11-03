import React, { Component } from 'react';
import { Widget, Number, AreaGraph } from 'routes/home/components';
import callApi from 'routes/home/api';
import config from 'routes/home/config';
class TotalNumberOfTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: [],
      chart: [
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

  // componentDidMount() {
  //   callApi({
  //     api: 'taskclose',
  //     success: (response) => {
  //       this.setState({ number: response[0].value });
  //     }
  //   });
  //   callApi({
  //     api: 'daytaskorder',
  //     success: (response) => {
  //       const data = response.map(({ date, value }) =>
  //         ({ type: '2017', name: date, value })
  //       );
  //       this.setState({ chart: data });
  //     }
  //   });
  // }

  render() {
    const { number, chart } = this.state;
    return (
      <Widget className="total-number-of-tasks" title='任务总数'>
        <div className='number'>
          <Number
            value={837}
            type="number"
          />
        </div>
        <div className='chart'>
          <AreaGraph
            data={chart}
            colX={{
              formatter: (dimValue) => (`${dimValue}月`)
            }}
            height={config.height * 3 - 24}
          />
        </div>
      </Widget>
    );
  }
}

export default TotalNumberOfTasks;
// {"errorCode": "200", "errorDescription": "OK", "response": [{"value": 76, "date": "01"}, {"value": 149, "date": "02"}, {"value": 213, "date": "03"}, {"value": 48, "date": "04"}, {"value": 99, "date": "05"}, {"value": 87, "date": "06"}, {"value": 71, "date": "07"}, {"value": 6, "date": "08"}, {"value": 53, "date": "09"}, {"value": 35, "date": "10"}]}
