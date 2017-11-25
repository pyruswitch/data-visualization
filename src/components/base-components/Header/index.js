import React, { PureComponent, Component } from 'react';
import { withRouter } from 'react-router-dom';
import RGL, { WidthProvider } from 'react-grid-layout';
import { Widget } from 'components';
import config, { widgetSize } from 'config';
import HomeSvg from './home.svg';
import './index.less';
const prefixCls = 'com-header';
const ReactGridLayout = WidthProvider(RGL);

class Header extends (PureComponent || Component) {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumb: ''
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(path, active, value) {
    this.setState({ breadcrumb: value });
    this.props.history.push(path);
  }

  componentDidMount(){
    const HASH = this.getHash();
    const activeMenu=this.props.menu.filter(({path})=>path===HASH);
    this.setState({ breadcrumb: activeMenu[0].value });
  }

  getHash=()=>location.hash.match(/\w+-{1}\w+(-\w+){0,}$/)[0]

  render() {
    const HASH = this.getHash();
    const { menu, history } = this.props;
    const [W, H] = widgetSize(24, 2);
    return (
      <ReactGridLayout className="com-header" rowHeight={config.size[1]} margin={[24, 24]} cols={24}>
        {[
          [{ x: 0, y: 0, w: 3, h: 2 }, <div className='logo' />],
          [{ x: 3, y: 0, w: 3, h: 2 }, <div className='breadcrumb'>
            <img
              src={HomeSvg}
              alt="home"
              onClick={() => this.props.history.push('/')}
            />
            <span>{this.state.breadcrumb}</span>
          </div>],
          [{ x: 8, y: 0, w: 14, h: 2 },
          <div className='menu'>
            {
              menu.map(({ value, path }, index) => {
                const p = .1 * index * 100;
                return (
                  <span
                    onClick={() => this.onClick(path, index, value)}
                    key={index}
                    className={path === HASH ? `active` : null}
                  >
                    <span>{value}</span>
                  </span>
                );
              })
            }
          </div>],
          [{ x: 23, y: 0, w: 1, h: 2 }, <div className='logout' onClick={() => this.props.history.push('/')} />]
        ].map((arr, index) => {
          const data = Object.assign({ static: true }, arr[0]);
          return (
            <div key={index} data-grid={data}>
              {arr[1]}
            </div>
          );
        })}
      </ReactGridLayout>
    );
  }
}

export default withRouter(Header);
