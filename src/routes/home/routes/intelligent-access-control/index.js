import React, { Component } from 'react';
import { Widget, Layout } from '../../components';
import {
  TrafficStatistics,
  TrafficMonitoring,
  TotalNumberOfVisitors,
  TotalNumberOfUsers
} from './components';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 1, w: 2, h: 2 }, <TotalNumberOfUsers />],
  [{ x: 2, y: 1, w: 2, h: 2 }, <TotalNumberOfVisitors />],
  [{ x: 0, y: 3, w: 4, h: 4 }, <TrafficStatistics />],
  [{ x: 6, y: 1, w: 3, h: 6 }, <TrafficMonitoring />]
];

const IntelligentAccessControl = () => (
  <div className='eh-data-intelligent-access-control'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default IntelligentAccessControl;
