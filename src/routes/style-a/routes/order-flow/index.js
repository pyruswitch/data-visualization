import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import {
  ConsumptionAmountStatistics,
  ConsumptionDistribution,
  ConsumptionOrderStatistics,
  LastestOrder,
  OrderType,
  PaymentMethod,
  TotalNumberOfOrders,
  TotalSpending
} from './widgets';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 3, w: 7, h: 7 }, <OrderType />],
  [{ x: 7, y: 3, w: 10, h: 7 }, <TotalSpending />],
  [{ x: 0, y: 10, w: 7, h: 7 }, <ConsumptionAmountStatistics />],
  [{ x: 7, y: 10, w: 10, h: 7 }, <TotalNumberOfOrders />],
  [{ x: 17, y: 3, w: 7, h: 14 }, <LastestOrder />],
  [{ x: 0, y: 17, w: 7, h: 7 }, <ConsumptionOrderStatistics />],
  [{ x: 7, y: 17, w: 10, h: 7 }, <ConsumptionDistribution />],
  [{ x: 17, y: 17, w: 7, h: 7 }, <PaymentMethod />]
];

const OrderFlow = () => (
  <div className='eh-data-order-flow'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default OrderFlow;
