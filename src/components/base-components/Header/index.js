import React, { PureComponent, Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.less';
const prefixCls = 'eh-data-visualization';

class Header extends (PureComponent || Component) {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(path, active) {
    this.props.history.push(path);
  }

  render() {
    // 获取到当前哈希值
    try {
      const HASH = location.hash.match(/\w+-{1}\w+(-\w+){0,}$/)[0];
      const { menu, history } = this.props;
      return (
        <div className={`${prefixCls}-header-style-B`}>
          <div className='logo'></div>
          <div className='content'>
            <div className='border' />
            <ul>
              {
                menu.map(({ value, path }, index) => {
                  const p = .1 * index * 100;
                  return (
                    <li
                      onClick={() => this.onClick(path, index)}
                      key={index}
                      className={path === HASH ? `active` : null}
                    >
                      <span>{value}</span>
                    </li>
                  );
                })
              }
              <div className='login'>
                <span>首页</span>
                <span>退出</span>
              </div>
            </ul>
          </div>
        </div>
      );
    } catch (error) {
      // this.props.history.push('/customer-service');
      return (<div></div>);
    }
  }
}

export default withRouter(Header);


