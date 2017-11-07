
import React, { Component } from 'react';
import { Histogram, Widget } from 'routes/home/components';
import callApi from 'routes/home/api';

class TotalConsumption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="total-electricity" title='总能耗'>

      </Widget>
    );
  }
}

export default TotalConsumption;
