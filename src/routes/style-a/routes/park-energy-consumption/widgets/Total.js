import React, { Component } from 'react';
import { Histogram, Widget, NumberCard, Title } from 'components';
import callApi from 'api';

class TotalConsumption extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Widget className="total-consumption" >
        <Title value='总能耗' />
        <div className='widget-content chart'>
          <div>
            <NumberCard value={33131213} type='number' hasBg unit="TEC" />
          </div>
        </div>
      </Widget>);
  }
}

export default TotalConsumption;
