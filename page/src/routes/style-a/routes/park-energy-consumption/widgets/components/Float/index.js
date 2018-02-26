import React, { Component } from 'react';
import Up from '../../svg/up.svg';
import Down from '../../svg/down.svg';
import './index.less';

const Float = ({ value }) => (
  <div className='com-float'>
    <img src={Up} />
    <span>{value}%</span>
  </div>
);
export default Float;
