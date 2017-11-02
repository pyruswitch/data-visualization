import React, { Component, PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import LoginForm from './form';
import Animate from 'rc-animate';
import './index.less';

export default class Login extends (PureComponent || Component) {
  render() {
    const prefixCls = 'ehome-login';
    return (
      <div>
        <Helmet>
          <title>欢迎使用左邻, 请登录</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <div className={`${prefixCls}`}>
          <LoginForm route='/' />
        </div>
      </div>
    );
  }
};
