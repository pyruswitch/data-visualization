import React, { Component } from 'react';
import { Histogram, Widget, NumberCard, Title } from 'components';
import callApi from 'api';

class Two extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className='widget-content chart'>
          <div>
            <NumberCard value={33131213} type='number' hasBg unit="TEC" />
          </div>
        </div>
      </Widget>);
  }
}

export default Two;
