
import React, { Component } from 'react';
import { Histogram, Widget } from 'routes/home/components';
import callApi from 'routes/home/api';

class PowerAnalysis extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="power-analysis" title='月度用电量分析'>

      </Widget>
    );
  }
}

export default PowerAnalysis;
