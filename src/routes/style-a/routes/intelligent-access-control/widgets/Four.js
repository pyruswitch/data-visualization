import React, { Component } from 'react';
import { Widget, LineChart, Title } from 'components';
import { callApi } from 'utils';
import api from 'api';
import config from 'config';

class Four extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ "value": 76, "date": "01" },
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


  render() {
    const { number, data } = this.state;
    const { title, size } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content">
          <LineChart
            data={data}
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

export default Four;
