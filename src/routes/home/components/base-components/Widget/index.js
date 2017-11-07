import React from 'react';
import './index.less';
const prefixCls = 'eh-data-visualization';

const Widget = ({ className = '', title, children }) => {
  return (
    <div className={`${prefixCls}-widget`}>
      <div>
        <h1>
          <span>{title}</span>
        </h1>
      </div>
      <span className='lefttop' />
      <span className='leftbottom' />
      <span className='rightbottom' />
      <span className='righttop' />
      <div className={`content ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Widget;
