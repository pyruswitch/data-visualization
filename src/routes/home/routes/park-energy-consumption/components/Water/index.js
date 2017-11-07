import React, { Component } from 'react';
import { Histogram, Widget } from 'routes/home/components';
import callApi from 'routes/home/api';

class WaterConsumption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="water-consumption" title='水能耗'>

      </Widget>
    );
  }
}

export default WaterConsumption;
