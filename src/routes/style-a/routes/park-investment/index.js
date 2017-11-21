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
  [{ x: 0, y: 2, w: 5, h: 6 }, <TotalAssets />],
  [{ x: 5, y: 2, w: 5, h: 6 }, <NumberOfCompaniesSettled />],
  [{ x: 10, y: 2, w: 5, h: 6 }, <AnnualRentalIncome />],
  [{ x: 0, y: 8, w: 15, h: 10 }, <RentArea />],
  [{ x: 15, y: 2, w: 9, h: 22 }, <BusinessRoster />],
  [{ x: 0, y: 18, w: 5, h: 6 }, <Investment />],
  [{ x: 5, y: 18, w: 5, h: 6 }, <IndustryAnalysis />],
  [{ x: 10, y: 18, w: 5, h: 6 }, <OccupancyRate />],
];

const ParkInvestment = () => (
  <div className='eh-data-park-investment'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default ParkInvestment;
