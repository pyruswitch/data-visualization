import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import { One, Two, Three, Four, Five } from './widgets';
import { widgetSize } from 'config';
import './index.less';
const LAYOUTCONF = [
  [{ x: 0, y: 3, w: 10, h: 9 }, <One size={widgetSize(10, 9)} />],
  [{ x: 11, y: 3, w: 14, h: 9 }, <Two />],
  [{ x: 17, y: 12, w: 7, h: 12 }, <Three />],
  [{ x: 0, y: 12, w: 17, h: 5 }, <Four />],
  [{ x: 0, y: 17, w: 17, h: 7 }, <Five />]
];

const SocialIntercourse = () => (
  <div className='eh-data-social-intercourse'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default SocialIntercourse;
