import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import { Electricity, PowerAnalysis, Total, Water, WaterAnalysis } from './widgets';
import callApi from 'api';
import './index.less';

// const LAYOUTCONF = [
//   [{ x: 0, y: 3, w: 10, h: 7 }, <Total />],
//   [{ x: 0, y: 10, w: 10, h: 7 }, <Water />],
//   [{ x: 0, y: 17, w: 10, h: 7 }, <Electricity />],
//   [{ x: 10, y: 3, w: 14, h: 10 }, <WaterAnalysis />],
//   [{ x: 10, y: 13, w: 14, h: 11 }, <PowerAnalysis />]
// ];

// const ParkEnergyConsumption = () => (
//   <div className='eh-data-park-energy-consumption'>
//     <Layout conf={LAYOUTCONF} />
//   </div>
// );

class ParkEnergyConsumption extends Component {
  componentDidMount() {
    callApi({
      api: 'totalenergy',
      success: (response) => {

      }
    });
  }

  render() {
    const LAYOUTCONF = [
      [{ x: 0, y: 3, w: 10, h: 7 }, <Total />],
      [{ x: 0, y: 10, w: 10, h: 7 }, <Water />],
      [{ x: 0, y: 17, w: 10, h: 7 }, <Electricity />],
      [{ x: 10, y: 3, w: 14, h: 10 }, <WaterAnalysis />],
      [{ x: 10, y: 13, w: 14, h: 11 }, <PowerAnalysis />]
    ];
    return (
      <div className='eh-data-park-energy-consumption'>
        <Layout conf={LAYOUTCONF} />
      </div>
    );
  }
}

export default ParkEnergyConsumption;
