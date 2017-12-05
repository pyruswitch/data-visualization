import React, { Component } from 'react';
import { Widget, Title, NumberCard, LineChart } from 'components';
import callApi from 'api';

class Three extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data0: [
        { value: 981, name: "01" },
        { value: 1111, name: "02" },
        { value: 826, name: "03" },
        { value: 1356, name: "04" },
        { value: 1868, name: "05" },
        { value: 999, name: "06" },
        { value: 1356, name: "07" },
        { value: 1231, name: "08" },
        { value: 684, name: "09" },
        { value: 702, name: "10" },
        { value: 890, name: "11" },
        { value: 98, name: "12" }
      ]
    };
  }

  componentDidMount() {
    callApi({
      api: 'monthcount',
      success: () => {

      }
    });
    callApi({
      api: 'ordercount',
      success: () => {

      }
    });
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
            colY={{ alias: '单位：单' }}
            width={size[0]}
            height={size[1] - 50}
          />
        </div>
        <NumberCard value={120102} hasBg type='number' />
      </Widget>
    );
  }
}

export default Three;
