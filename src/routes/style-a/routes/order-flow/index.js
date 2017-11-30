import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import { One, Two, Three, Four, Five, Six } from './widgets';
import { widgetSize } from 'config';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 2, w: 14, h: 8 }, <One title='园区收入' size={widgetSize(14, 8)} />],
  [{ x: 14, y: 2, w: 10, h: 16 }, <Two title='最新订单' size={widgetSize(10, 16)} />],
  [{ x: 0, y: 10, w: 14, h: 8 }, <Three title='园区订单' size={widgetSize(14, 8)} />],
  [{ x: 0, y: 18, w: 4, h: 6 }, <Four title='支付方式' size={widgetSize(4, 6)} />],
  [{ x: 4, y: 18, w: 10, h: 6 }, <Five title='本月消费分布' size={widgetSize(10, 6)} />],
  [{ x: 14, y: 18, w: 10, h: 6 }, <Six title='订单类型' size={widgetSize(10, 6)} />],
];

const OrderFlow = () => (
  <div className='eh-data-order-flow'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default OrderFlow;
