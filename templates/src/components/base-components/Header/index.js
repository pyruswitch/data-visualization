import React, { PureComponent, Component } from 'react';
import { withRouter } from 'react-router-dom';
import RGL, { WidthProvider } from 'react-grid-layout';
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import { Widget } from 'components';
import config, { widgetSize } from 'config';
import { getUrlParams } from 'utils';
import HomeSvg from './home.svg';
import ELive from './elive.svg';
import Zuolin from './zuolin.svg';
import 'rc-menu/assets/index.css';
import './index.less';

const prefixCls = 'com-header';
const ReactGridLayout = WidthProvider(RGL);
const { ns } = getUrlParams(location.href);
const logos = {
  999955: ELive
}

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

  componentDidMount() {
    const HASH = this.getHash();
    const activeMenu = this.props.menu.filter(({ path }) => path === HASH);
    try {
      this.setState({ breadcrumb: activeMenu[0].value });
    } catch (error) {

    }
  }

  getHash = () => {
    return location.hash.split('?')[0].match(/\w+-{1}\w+(-\w+){0,}$/)[0]
  }

  render() {
    const HASH = this.getHash();
    const { menu, history } = this.props;
    const [W, H] = widgetSize(24, 2);
    return (
      <ReactGridLayout className="com-header" rowHeight={config.size[1]} margin={[24, 24]} cols={24}>
        {[
          [{ x: 0, y: 0, w: 3, h: 2 }, <img src={logos[ns] || Zuolin} className='logo' />],
          [{ x: 3, y: 0, w: 3, h: 2 }, <div className='breadcrumb'>
            <img
              src={HomeSvg}
              alt="home"
            />
            <span>{this.state.breadcrumb}</span>
          </div>],
          [{ x: 8, y: 0, w: 14, h: 2 },
          <Menu mode='horizontal' onSelect={(path) => {
            this.setState({ breadcrumb: path.item.props.children });
            this.props.history.push(path.key)
          }}>
            {
              menu.map(({ value, path, submenu = [] }, index) => {
                if (submenu.length > 0) {
                  return (
                    <SubMenu title={<span>{value}</span>} key={index}>
                      {
                        submenu.map(({ value, path }) => <MenuItem key={path}>{value}</MenuItem>)
                      }
                    </SubMenu>
                  )
                }
                else
                  return <MenuItem key={path}>{value}</MenuItem>
              })
            }
          </Menu>],
          // [{ x: 23, y: 0, w: 1, h: 2 }, <div className='logout' onClick={() => this.props.history.push('/')} />]
        ].map((arr, index) => {
          const data = Object.assign({ static: true }, arr[0]);
          return (
            <div key={index} data-grid={data}>
              {arr[1]}
            </div>
          );
        })
        }
      </ReactGridLayout>
    );
  }
}

export default withRouter(Header);

