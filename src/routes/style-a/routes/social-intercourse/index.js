import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import { One, Two, Three, Four, Five } from './widgets';
import { widgetSize } from 'config';
import './index.less';
const LAYOUTCONF = [
  [{ x: 0, y: 2, w: 10, h: 9 }, <One title={['新注册用户', '性别比例', '月活跃用户', '设备终端']} size={widgetSize(10, 9)} />],
  [{ x: 11, y: 2, w: 14, h: 9 }, <Two title='整体趋势图' size={widgetSize(14, 9)} />],
  [{ x: 0, y: 11, w: 17, h: 5 }, <Three title={['活动报名总人次', '活动标签分布', '活动热度分布']} size={widgetSize(17, 5)} />],
  [{ x: 17, y: 11, w: 7, h: 13 }, <Four title='最新发布' size={widgetSize(7, 13)} />],
  [{ x: 0, y: 16, w: 17, h: 8 }, <Five title={['帖子发布总数', '话题排行榜', '总阅读量']} size={widgetSize(17, 8)} />]
];

const SocialIntercourse = () => (
  <div className='eh-data-social-intercourse'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default SocialIntercourse;
