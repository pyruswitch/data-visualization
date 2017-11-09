import React, { Component } from 'react';
import { Widget, Layout } from '../../components';

import './index.less';

const GRID = [24, 24];
let LAYOUTCONF = [];
new Array(GRID[0]).fill(0).forEach(function (v, x) {
  // LAYOUTCONF.push([{ x: x, y: 1, w: 1, h: 1 }]);
  new Array(GRID[1]).fill(0).forEach(function (v, y) {
    LAYOUTCONF.push([{ x, y, w: 1, h: 1 }]);
  }, this);
}, this);
// console.log(LAYOUTCONF);


// const LAYOUTCONF = [
//   [{ x: 0, y: 1, w: 1, h: 1 },],
//   [{ x: 2, y: 1, w: 3, h: 4 },],
//   [{ x: 0, y: 3, w: 2, h: 2 },],
//   [{ x: 6, y: 1, w: 2, h: 4 },],
//   [{ x: 0, y: 5, w: 1, h: 2 },],
//   [{ x: 1, y: 5, w: 3, h: 2 },],
//   [{ x: 5, y: 5, w: 3, h: 2 },]
// ];

const GridDemo = () => (
  <div className='eh-data-grid-demo'>
    <Layout conf={LAYOUTCONF} />
  </div>
);

export default GridDemo;
