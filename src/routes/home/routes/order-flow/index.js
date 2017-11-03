import React, { Component } from 'react';
import { Widget, Layout } from '../../components';
import {
  ConsumptionAmountStatistics,
  ConsumptionDistribution,
  ConsumptionOrderStatistics,
  LastestOrder,
  OrderType,
  PaymentMethod,
  TotalNumberOfOrders,
  TotalSpending
} from './components';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 1, w: 2, h: 2 }, <OrderType />],
  [{ x: 2, y: 1, w: 3, h: 2 }, <TotalSpending />],
  [{ x: 0, y: 3, w: 2, h: 2 }, <ConsumptionAmountStatistics />],
  [{ x: 2, y: 3, w: 3, h: 2 }, <TotalNumberOfOrders />],
  [{ x: 6, y: 1, w: 2, h: 4 }, <LastestOrder />],
  [{ x: 0, y: 5, w: 2, h: 2 }, <ConsumptionOrderStatistics />],
  [{ x: 2, y: 5, w: 3, h: 2 }, <ConsumptionDistribution />],
  [{ x: 6, y: 5, w: 2, h: 2 }, <PaymentMethod />]
];

const OrderFlow = () => (
  <div className='eh-data-order-flow'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default OrderFlow;
