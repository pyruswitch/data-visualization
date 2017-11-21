import React, { Component } from 'react';
import { Widget, Layout } from 'components';
import { One, Two, Three, Four, Five } from './widgets';
import { widgetSize } from 'config';
import './index.less';
const LAYOUTCONF = [
  [{ x: 0, y: 2, w: 10, h: 9 }, <One size={widgetSize(10, 9)} />],
  [{ x: 11, y: 2, w: 14, h: 9 }, <Two size={widgetSize(14, 9)} />],
  [{ x: 0, y: 11, w: 17, h: 5 }, <Three size={widgetSize(17, 5)} />],
  [{ x: 17, y: 11, w: 7, h: 13 }, <Four size={widgetSize(7, 13)} />],
  [{ x: 0, y: 16, w: 17, h: 8 }, <Five size={widgetSize(17, 8)} />]
];

const SocialIntercourse = () => (
  <div className='eh-data-social-intercourse'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default SocialIntercourse;
