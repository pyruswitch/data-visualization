// 框架
import React from 'react';
// 组件
import { Icon } from 'antd';
// 静态资源
import NotFound from 'images/404/404.png';
import './index.less';

export default () => {
  return (
    <div className="ehome-notfound">
      <div>
        <img alt='404' src={NotFound} />
        <p>
          <h1>404</h1>
          <span>咻~ 此页面已逃亡火星~</span>
          <span>页面不存在</span>
          <a href='/'>返回主界面<Icon type="arrow-right" /></a>
        </p>
      </div>
    </div>
  );
};
