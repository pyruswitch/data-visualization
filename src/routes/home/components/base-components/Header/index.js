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
      const HASH = location.hash.match(/\w+-{1}\w+$/)[0];
      const { menu, history } = this.props;
      return (
        <div className={`${prefixCls}-header`}>
          <ul>
            {
              menu.map(({ value, path }, index) => {
                const p = .1 * index * 100;
                return (
                  <li
                    onClick={() => this.onClick(path, index)}
                    style={{ transform: `translateX(-${p}%)` }}
                    key={index}
                    className={path === HASH ? `active` : null}
                  >
                    <div>
                      <span>{value}</span>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>
      );
    } catch (error) {
      return <div>hello</div>;
    }
  }
}

export default withRouter(Header);
