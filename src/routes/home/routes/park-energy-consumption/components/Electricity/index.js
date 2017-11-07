import React, { Component } from 'react';
import { Histogram, Widget } from 'routes/home/components';
import callApi from 'routes/home/api';

class ElectricityConsumption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="electricity-electricity" title='电能耗'>

      </Widget>
    );
  }
}

export default ElectricityConsumption;
