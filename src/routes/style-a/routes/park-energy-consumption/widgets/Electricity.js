import React, { Component } from 'react';
import { Histogram, Widget, Title, Line, NumberCard } from 'components';
import icon from './icon.svg';
import callApi from 'api';

class ElectricityConsumption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="electricity-consumption">
        <Title value="电能耗" />
        <div className="widget-content">
          <div className="number">
            <NumberCard value={123} type='number' unit='KW.H' />
          </div>
          <Line />
          <div className="button">
            <div onClick={() => this.props.openModal('电能耗数据')}>
              <img src={icon} alt="" />
              <span>实时读表</span>
            </div>
          </div>
        </div>
      </Widget>
    );
  }
}

export default ElectricityConsumption;
