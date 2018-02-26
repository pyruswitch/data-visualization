import React, { Component } from 'react';
import { Widget, Layout } from '../../components';
import {
  CompletionRate,
  InspectionTask,
  LatestInspectionTasks,
  LatestVerficationTasks,
  OnTimeRate,
  Quality,
  TaskType,
  VerificationTask
} from './components';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 3, w: 7, h: 7 }, <TaskType />],
  [{ x: 7, y: 3, w: 7, h: 7 }, <InspectionTask />],
  [{ x: 0, y: 10, w: 7, h: 7 }, <CompletionRate />],
  [{ x: 7, y: 10, w: 7, h: 7 }, <VerificationTask />],
  [{ x: 14, y: 3, w: 10, h: 10 }, <LatestInspectionTasks />],
  [{ x: 0, y: 17, w: 7, h: 7 }, <OnTimeRate />],
  [{ x: 7, y: 17, w: 7, h: 7 }, <Quality />],
  [{ x: 14, y: 13, w: 10, h: 11 }, <LatestVerficationTasks />]
];

const TasksManagement = () => (
  <div className='eh-data-tasks-management'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default TasksManagement;
