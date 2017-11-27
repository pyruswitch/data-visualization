import React, { Component } from 'react';
import { Histogram, Widget, Title, NumberCard, Line } from 'components';
import icon from './svg/icon.svg';
import Float from './components/Float';
import callApi from 'api';

class One extends Component {
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
            <NumberCard value={3458716} type='number' unit='T' />
          </div>
          <Line />
          <div className="button">
            <div onClick={() => this.props.openModal(0)}>
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

export default One;
