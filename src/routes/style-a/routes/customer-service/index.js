import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import { One, Two, Three, Four, Five, Six } from './widgets';
import { widgetSize } from 'config';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 2, w: 16, h: 8 }, <One size={widgetSize(16, 8)} />],
  [{ x: 16, y: 2, w: 8, h: 15 }, <Two size={widgetSize(8, 15)} />],
  [{ x: 0, y: 10, w: 8, h: 7 }, <Three size={widgetSize(8, 7)} />],
  [{ x: 8, y: 10, w: 8, h: 7 }, <Four size={widgetSize(8, 7)} />],
  [{ x: 0, y: 17, w: 12, h: 7 }, <Five size={widgetSize(12, 7)} />],
  [{ x: 12, y: 17, w: 12, h: 7 }, <Six size={widgetSize(12, 7)} />],
  // [{ x: 0, y: 2, w: 7, h: 7 }, <TaskTypesDistribution size={widgetSize(7, 7)} />],
  // [{ x: 7, y: 2, w: 10, h: 14 }, <TotalNumberOfTasks size={widgetSize(10, 14)} />],
  // [{ x: 0, y: 9, w: 7, h: 7 }, <ModulesActivation size={widgetSize(7, 7)} />],
  // [{ x: 17, y: 2, w: 7, h: 14 }, <LatestTasks size={widgetSize(7, 14)} />],
  // [{ x: 0, y: 16, w: 7, h: 8 }, <CompletedTasks size={widgetSize(7, 8)} />],
  // [{ x: 7, y: 16, w: 10, h: 8 }, <AverageResponseTime size={widgetSize(10, 8)} />],
  // [{ x: 17, y: 16, w: 7, h: 8 }, <TasksDistribution size={widgetSize(7, 8)} />]
];

const CustomerService = () => (
  <div className='eh-data-customer-service'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default CustomerService;
