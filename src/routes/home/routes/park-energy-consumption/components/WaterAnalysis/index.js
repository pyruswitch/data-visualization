
import React, { Component } from 'react';
import { Histogram, Widget } from 'routes/home/components';
import callApi from 'routes/home/api';

class WaterAnalysis extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="water-analysis" title='月度用水量分析'>

      </Widget>
    );
  }
}

export default WaterAnalysis;
