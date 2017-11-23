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
  [{ x: 12, y: 17, w: 12, h: 7 }, <Six size={widgetSize(12, 7)} />]
];

const CustomerService = () => (
  <div className='eh-data-customer-service'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default CustomerService;
