import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import {
  AnnualRentalIncome,
  BusinessRoster,
  IndustryAnalysis,
  Investment,
  OccupancyRate,
  RentArea,
  NumberOfCompaniesSettled,
  TotalAssets
} from './widgets';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 3, w: 5, h: 6 }, <TotalAssets />],
  [{ x: 5, y: 3, w: 5, h: 6 }, <NumberOfCompaniesSettled />],
  [{ x: 10, y: 3, w: 5, h: 6 }, <AnnualRentalIncome />],
  [{ x: 0, y: 9, w: 15, h: 9 }, <RentArea />],
  [{ x: 15, y: 3, w: 9, h: 21 }, <BusinessRoster />],
  [{ x: 0, y: 18, w: 5, h: 6 }, <Investment />],
  [{ x: 5, y: 18, w: 5, h: 6 }, <OccupancyRate />],
  [{ x: 10, y: 18, w: 5, h: 6 }, <IndustryAnalysis />]
];

const ParkInvestment = () => (
  <div className='eh-data-park-investment'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default ParkInvestment;
