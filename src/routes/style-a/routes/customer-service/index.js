import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import {
  TotalNumberOfTasks,
  TaskTypesDistribution,
  TasksDistribution,
  ModulesActivation,
  LatestTasks,
  CompletedTasks,
  AverageResponseTime
} from './widgets';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 2, w: 7, h: 7 }, <TaskTypesDistribution />],
  [{ x: 7, y: 2, w: 10, h: 14 }, <TotalNumberOfTasks />],
  [{ x: 0, y: 9, w: 7, h: 7 }, <ModulesActivation />],
  [{ x: 17, y: 2, w: 7, h: 14 }, <LatestTasks />],
  [{ x: 0, y: 16, w: 7, h: 8 }, <CompletedTasks />],
  [{ x: 7, y: 16, w: 10, h: 8 }, <AverageResponseTime />],
  [{ x: 17, y: 16, w: 7, h: 8 }, <TasksDistribution />]
];

const CustomerService = () => (
  <div className='eh-data-customer-service'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default CustomerService;
