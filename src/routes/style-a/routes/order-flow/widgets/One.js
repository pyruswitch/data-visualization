import React, { Component } from 'react';
import { Widget, Title, NumberCard, LineChart } from 'components';
import callApi from 'api';

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data0: [
        { value: 98111, name: "01" },
        { value: 111111, name: "02" },
        { value: 82633, name: "03" },
        { value: 135610, name: "04" },
        { value: 186846, name: "05" },
        { value: 99998, name: "06" },
        { value: 135616, name: "07" },
        { value: 123131, name: "08" },
        { value: 68460, name: "09" },
        { value: 75450, name: "10" },
        { value: 103131, name: "11" },
        { value: 3131, name: "12" }
      ]
    };
  }

  render() {
    const { title, size } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart">
          <LineChart
            data={this.state.data0}
            colX={{ formatter: (dimValue) => (`${dimValue}月`) }}
            colY={{ alias: '单位：元' }}
            width={size[0]}
            height={size[1] - 50}
          />
        </div>
        <NumberCard value={3458716} hasBg type='number' />
      </Widget>
    );
  }
}

export default One;
