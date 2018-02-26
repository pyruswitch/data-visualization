import React, { Component } from 'react';
import { Widget, DonutChart, Box, Title, NumberCard, Line } from 'components';
import { callApi } from 'utils';
import api from 'api';

class Two extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { size, title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content flex">

        </div>
      </Widget>
    );
  }
}

export default Two;
