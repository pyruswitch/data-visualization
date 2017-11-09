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
  [{ x: 0, y: 3, w: 7, h: 7 }, <NumberOfCompaniesSettled />],
  [{ x: 7, y: 3, w: 10, h: 7 }, <TotalAssets />],
  [{ x: 0, y: 10, w: 7, h: 7 }, <AnnualRentalIncome />],
  [{ x: 7, y: 10, w: 10, h: 7 }, <RentArea />],
  [{ x: 17, y: 3, w: 7, h: 14 }, <BusinessRoster />],
  [{ x: 0, y: 17, w: 7, h: 7 }, <Investment />],
  [{ x: 7, y: 17, w: 10, h: 7 }, <OccupancyRate />],
  [{ x: 17, y: 17, w: 7, h: 7 }, <IndustryAnalysis />]
];

const ParkInvestment = () => (
  <div className='eh-data-park-investment'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default ParkInvestment;
