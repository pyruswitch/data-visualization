import React, { Component } from 'react';
import { Histogram, Widget, NumberCard } from 'components';
import callApi from 'api';
import Arrow from './uparrow.svg';

class TotalConsumption extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Widget className="total-consumption" title='总能耗'>
        <div>
          <NumberCard type='number' value={21878742} hideUnit={true} />
        </div>
        <span className="percent">
          <img src={Arrow} />
          15%
        </span>
      </Widget>);
  }
}

export default TotalConsumption;
