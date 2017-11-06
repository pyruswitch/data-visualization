import React, { Component } from 'react';
import { Widget, Layout } from '../../components';
// import {
//   AnnualRentalIncome,
//   BusinessRoster,
//   IndustryAnalysis,
//   Investment,
//   OccupancyRate,
//   RentArea,
//   NumberOfCompaniesSettled,
//   TotalAssets
// } from './components';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 1, w: 2, h: 2 },],
  [{ x: 2, y: 1, w: 3, h: 2 },],
  [{ x: 0, y: 3, w: 2, h: 2 },],
  [{ x: 2, y: 3, w: 3, h: 2 },],
  [{ x: 6, y: 1, w: 2, h: 4 },],
  [{ x: 0, y: 5, w: 2, h: 2 },],
  [{ x: 2, y: 5, w: 3, h: 2 },],
  [{ x: 6, y: 5, w: 2, h: 2 },]
];

const TasksManagement = () => (
  <div className='eh-data-tasks-management'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default TasksManagement;
