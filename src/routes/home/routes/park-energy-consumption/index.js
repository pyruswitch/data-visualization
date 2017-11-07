import React, { Component } from 'react';
import { Widget, Layout } from '../../components';
import { Electricity, PowerAnalysis, Total, Water, WaterAnalysis } from './components';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 1, w: 3, h: 2 }, <Total />],
  [{ x: 0, y: 3, w: 3, h: 2 }, <Water />],
  [{ x: 0, y: 5, w: 3, h: 2 }, <Electricity />],
  [{ x: 4, y: 1, w: 4, h: 3 }, <WaterAnalysis />],
  [{ x: 4, y: 4, w: 4, h: 3 }, <PowerAnalysis />]
];

const ParkEnergyConsumption = () => (
  <div className='eh-data-park-energy-consumption'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default ParkEnergyConsumption;
