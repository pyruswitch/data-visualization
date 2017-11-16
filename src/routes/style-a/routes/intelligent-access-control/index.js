import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import {
  TrafficStatistics,
  TrafficMonitoring,
  TotalNumberOfVisitors,
  TotalNumberOfUsers
} from './widgets';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 3, w: 7, h: 7 }, <TotalNumberOfUsers />],
  [{ x: 7, y: 3, w: 7, h: 7 }, <TotalNumberOfVisitors />],
  [{ x: 0, y: 10, w: 14, h: 14 }, <TrafficStatistics />],
  [{ x: 14, y: 3, w: 10, h: 21 }, <TrafficMonitoring />]
];

const IntelligentAccessControl = () => (
  <div className='eh-data-intelligent-access-control'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default IntelligentAccessControl;
