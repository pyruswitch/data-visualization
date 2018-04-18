import React from 'react';
import './index.less';
const prefixCls = 'eh-data-visualization';

const Widget = ({ className = '', title, children, style }) => {
  return (
    <div className={`${prefixCls}-widget`}>
      {
        title &&
        <div>
          <h1>{title}</h1>
        </div>
      }
      <div className={`content ${className}`} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Widget;
