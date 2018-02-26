import React, { Component } from 'react';
import './index.less';
const TabPane = (props) => {
  return (<div>{props.children}</div>)
}
class Tabs extends Component {
  static TabPane = TabPane

  state = {
    activeTab: 0
  }

  onClick = (i) => {
    this.setState({ activeTab: i });
  }
  render() {
    const { children, title } = this.props;

    return (
      <div className='com-tabs'>
        <div className="header">
          <div className='title'>
            {title}
          </div>
          <div className="nav">
            {
              children.map(({ props }, i) =>
                <span className={i === this.state.activeTab ? 'active' : null} key={i} onClick={() => this.onClick(i)}>
                  {props.tab}
                </span>
              )
            }
          </div>
        </div>
        <div className="content" style={{ transform: `translateX(-${this.state.activeTab * 100}%)` }}>
          {children}
        </div>
      </div >
    );
  }
}

export default Tabs;
