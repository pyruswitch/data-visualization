import React, { Component } from 'react';
import { Widget, Layout } from '../../components';
// import {
//   UsageOfParkingSpaces,
//   TrafficStatistics,
//   TrafficMonitoring,
//   TotalParkingSpaces
// } from './components';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 1, w: 2, h: 2 },],
  [{ x: 2, y: 1, w: 3, h: 2 },],
  [{ x: 0, y: 3, w: 5, h: 4 },],
  [{ x: 6, y: 1, w: 2, h: 6 },]
];

const ParkEnergyConsumption = () => (
  <div className='eh-data-park-energy-consumption'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default ParkEnergyConsumption;
