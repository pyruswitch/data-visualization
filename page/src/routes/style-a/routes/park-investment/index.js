import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import { One, Two, Three, Four, Five, Six, Seven, Eight } from './widgets';
import { widgetSize } from 'config';
import './index.less';

const LAYOUTCONF = [
  [{ x: 0, y: 2, w: 5, h: 6 }, <One title='总产值' size={widgetSize(5, 6)} />],
  [{ x: 5, y: 2, w: 5, h: 6 }, <Two title='入驻企业数' size={widgetSize(5, 6)} />],
  [{ x: 10, y: 2, w: 5, h: 6 }, <Three title='年租金收入' size={widgetSize(5, 6)} />],
  [{ x: 15, y: 2, w: 9, h: 16 }, <Four title='企业名册' size={widgetSize(9, 16)} />],
  [{ x: 0, y: 8, w: 15, h: 10 }, <Five title='招租趋势图' size={widgetSize(15, 10)} />],
  [{ x: 0, y: 18, w: 7, h: 6 }, <Six title='招商引资' size={widgetSize(7, 6)} />],
  [{ x: 7, y: 18, w: 8, h: 6 }, <Seven title='行业分析' size={widgetSize(8, 6)} />],
  [{ x: 15, y: 18, w: 9, h: 6 }, <Eight title='入住率' size={widgetSize(9, 6)} />],
];

const ParkInvestment = () => (
  <div className='eh-data-park-investment'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default ParkInvestment;
