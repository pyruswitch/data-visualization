import React, { Component } from 'react';
import { Histogram, Widget, Title, NumberCard, Line } from 'components';
import icon from './icon.svg';
import callApi from 'api';

class WaterConsumption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="water-consumption">
        <Title value="水能耗" />
        <div className="widget-content">
          <div className="number">
            <NumberCard value={123} type='number' unit='T' />
          </div>
          <Line />
          <div className="button">
            <div onClick={() => this.props.openModal('水能耗数据')}>
              <img src={icon} alt="" />
              <span>实时读表</span>
            </div>
          </div>
        </div>
      </Widget>
    );
  }
}

export default WaterConsumption;
