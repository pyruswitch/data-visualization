import React, { Component } from 'react';
import { Box, NumberCard, Widget, Line } from 'components';
import callApi from 'api';

class TotalAssets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2031221300
    };
  }

  // componentDidMount() {
  //   window.setInterval(() => {
  //       this.setState({ value: this.state.value + 20 });
  //   }, 4999);
  // }

  render() {
    const value = this.state.value;
    return (
      <Widget className="total-assets" title='总产值'>
        <div className="animate-number">
          <NumberCard type='money' value={value} hideUnit={true} />
        </div>
        <Line />
        <div className="box">
          <Box title='税收(万元)' number='47,521' />
          <Box title='人数' number='21,728' />
        </div>
      </Widget>
    );
  }
}

export default TotalAssets;
