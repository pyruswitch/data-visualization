import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import {
  UsageOfParkingSpaces,
  TrafficStatistics,
  TrafficMonitoring,
  TotalParkingSpaces
} from './widgets';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 1, w: 2, h: 2 }, <TotalParkingSpaces />],
  [{ x: 2, y: 1, w: 3, h: 2 }, <UsageOfParkingSpaces />],
  [{ x: 0, y: 3, w: 5, h: 4 }, <TrafficStatistics />],
  [{ x: 6, y: 1, w: 2, h: 6 }, <TrafficMonitoring />]
];

const IntelligentParking = () => (
  <div className='eh-data-intelligent-parking'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default IntelligentParking;
