import React, { Component } from 'react';
import { Histogram, Widget } from 'routes/home/components';
import callApi from 'routes/home/api';
import Arrow from '../uparrow.svg';

class ElectricityConsumption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="electricity-consumption" title='电能耗'>
        <div>
          <span>3,822000</span>
        </div>
        <span className="percent">
          <img src={Arrow} />
          15%
        </span>
      </Widget>
    );
  }
}

export default ElectricityConsumption;
