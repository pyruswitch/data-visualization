import React, { Component } from 'react';
import { Histogram, Widget, Title, Line, NumberCard } from 'components';
import icon from './svg/icon.svg';
import Float from './components/Float';
import callApi from 'api';

class Three extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content">
          <div className="number">
            <NumberCard value={123} type='number' unit='KW.H' />
          </div>
          <Line />
          <div className="button">
            <div onClick={() => this.props.openModal('电能耗数据')}>
              <img src={icon} alt="" />
              <span>实时读表</span>
            </div>
          </div>
        </div>
        <Float value={1} />
      </Widget>
    );
  }
}

export default Three;
