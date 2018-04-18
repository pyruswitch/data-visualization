import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import { One, Two, Three, Four } from './widgets';
import { widgetSize } from 'config';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 2, w: 7, h: 6 }, <One title='授权用户总数' />],
  [{ x: 7, y: 2, w: 7, h: 6 }, <Two title='授权访客总数' />],
  [{ x: 14, y: 2, w: 10, h: 22 }, <Three title='企业名册' />],
  [{ x: 0, y: 8, w: 14, h: 16 }, <Four title='逐时人流量统计' size={widgetSize(14, 16)} />]
];

const IntelligentAccessControl = () => (
  <div className='eh-data-intelligent-access-control'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default IntelligentAccessControl;
