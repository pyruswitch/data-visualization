import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import {
  UsageOfParkingSpaces,
  TrafficStatistics,
  TrafficMonitoring,
  TotalParkingSpaces,
  One, Two, Three
} from './widgets';
import { widgetSize } from 'config';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 2, w: 17, h: 9 }, <One size={widgetSize(17, 9)} title='分区车位使用分享' />],
  [{ x: 18, y: 2, w: 7, h: 22 }, <Two title='实时车流监控' />],
  [{ x: 0, y: 11, w: 17, h: 13 }, <Three title='逐时车流统计' />]
];

const IntelligentParking = () => (
  <div className='eh-data-intelligent-parking'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default IntelligentParking;
