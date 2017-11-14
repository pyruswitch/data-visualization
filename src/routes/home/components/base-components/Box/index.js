import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';

const Box = ({ title, number, unit }) => {
  const prefixCls = 'eh-visualization-box';
  return (
    <div className={prefixCls}>
      <div>
        <span>{title}</span>
        <span>{number}<sub>{unit}</sub></span>
      </div>
    </div>
  );
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string
};

export default Box;
