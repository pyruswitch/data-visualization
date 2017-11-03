import React, { Component } from 'react';
import { Widget, Layout } from '../../components';
import {
  TotalNumberOfTasks,
  TaskTypesDistribution,
  TasksDistribution,
  ModulesActivation,
  LatestTasks,
  CompletedTasks,
  AverageResponseTime
} from './components';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 1, w: 2, h: 2 }, <TaskTypesDistribution />],
  [{ x: 2, y: 1, w: 3, h: 4 }, <TotalNumberOfTasks />],
  [{ x: 0, y: 3, w: 2, h: 2 }, <ModulesActivation />],
  [{ x: 6, y: 1, w: 2, h: 4 }, <LatestTasks />],
  [{ x: 0, y: 5, w: 1, h: 2 }, <CompletedTasks />],
  [{ x: 1, y: 5, w: 3, h: 2 }, <AverageResponseTime />],
  [{ x: 5, y: 5, w: 3, h: 2 }, <TasksDistribution />]
];

const CustomerService = () => (
  <div className='eh-data-customer-service'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default CustomerService;
