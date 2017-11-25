import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import { One, Two, Three, Four, Five, Six } from './widgets';
import { widgetSize } from 'config';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 2, w: 16, h: 8 }, <One title={['任务总数', '整体趋势图']} size={widgetSize(16, 8)} />],
  [{ x: 16, y: 2, w: 8, h: 15 }, <Two title={['最新代办任务']} size={widgetSize(8, 15)} />],
  [{ x: 0, y: 10, w: 8, h: 7 }, <Three title={['任务类型分布']} size={widgetSize(8, 7)} />],
  [{ x: 8, y: 10, w: 8, h: 7 }, <Four title={['服务模块活跃度']} size={widgetSize(8, 7)} />],
  [{ x: 0, y: 17, w: 12, h: 7 }, <Five title={['平均响应时间']} size={widgetSize(12, 7)} />],
  [{ x: 12, y: 17, w: 12, h: 7 }, <Six title={['任务分布']} size={widgetSize(12, 7)} />]
];

const CustomerService = () => (
  <div className='eh-data-customer-service'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default CustomerService;
