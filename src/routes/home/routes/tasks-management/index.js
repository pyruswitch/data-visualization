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
  [{ x: 0, y: 1, w: 2, h: 2 }, <TaskType />],
  [{ x: 2, y: 1, w: 2, h: 2 }, <InspectionTask />],
  [{ x: 0, y: 3, w: 2, h: 2 }, <CompletionRate />],
  [{ x: 2, y: 3, w: 2, h: 2 }, <VerificationTask />],
  [{ x: 4, y: 1, w: 3, h: 3 }, <LatestInspectionTasks />],
  [{ x: 0, y: 5, w: 2, h: 2 }, <OnTimeRate />],
  [{ x: 2, y: 5, w: 2, h: 2 }, <Quality />],
  [{ x: 4, y: 4, w: 3, h: 3 }, <LatestVerficationTasks />]
];

const TasksManagement = () => (
  <div className='eh-data-tasks-management'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default TasksManagement;
