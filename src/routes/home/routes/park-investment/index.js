import React, { Component } from 'react';
import { Widget, Layout } from '../../components';
import {
  AnnualRentalIncome,
  BusinessRoster,
  IndustryAnalysis,
  Investment,
  OccupancyRate,
  RentArea,
  NumberOfCompaniesSettled,
  TotalAssets
} from './components';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 1, w: 2, h: 2 }, <NumberOfCompaniesSettled />],
  [{ x: 2, y: 1, w: 3, h: 2 }, <TotalAssets />],
  [{ x: 0, y: 3, w: 2, h: 2 }, <AnnualRentalIncome />],
  [{ x: 2, y: 3, w: 3, h: 2 }, <RentArea />],
  [{ x: 6, y: 1, w: 2, h: 4 }, <BusinessRoster />],
  [{ x: 0, y: 5, w: 2, h: 2 }, <Investment />],
  [{ x: 2, y: 5, w: 3, h: 2 }, <OccupancyRate />],
  [{ x: 6, y: 5, w: 2, h: 2 }, <IndustryAnalysis />]
];

const ParkInvestment = () => (
  <div className='eh-data-park-investment'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default ParkInvestment;
