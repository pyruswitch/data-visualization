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
  [{ x: 0, y: 3, w: 7, h: 7 }, <TaskTypesDistribution />],
  [{ x: 7, y: 3, w: 10, h: 14 }, <TotalNumberOfTasks />],
  [{ x: 0, y: 10, w: 7, h: 7 }, <ModulesActivation />],
  [{ x: 17, y: 3, w: 7, h: 14 }, <LatestTasks />],
  [{ x: 0, y: 17, w: 7, h: 7 }, <CompletedTasks />],
  [{ x: 7, y: 17, w: 10, h: 7 }, <AverageResponseTime />],
  [{ x: 17, y: 17, w: 7, h: 7 }, <TasksDistribution />]
];

const CustomerService = () => (
  <div className='eh-data-customer-service'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default CustomerService;
