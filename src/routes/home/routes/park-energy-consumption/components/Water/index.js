import React, { Component } from 'react';
import { Histogram, Widget } from 'routes/home/components';
import callApi from 'routes/home/api';
import Arrow from '../uparrow.svg';

class WaterConsumption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="water-consumption" title='水能耗'>
        <div>
          <span>3,822</span>
        </div>
        <span className="percent">
          <img src={Arrow} />
          15%
        </span>
      </Widget>
    );
  }
}

export default WaterConsumption;
