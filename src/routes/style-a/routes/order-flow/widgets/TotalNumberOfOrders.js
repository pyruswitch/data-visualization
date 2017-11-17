import React, { Component } from 'react';
import { Box, NumberCard, Widget } from 'components';
import callApi from 'api';

class TotalNumberOfOrders extends Component {
  constructor(props) {
    super(props);
    this.state = { data: 0 };
  }

  componentDidMount() {
    callApi({
      api: 'ordercount',
      success: (response) => {
        this.setState({ data: response });
      }
    });
  }


  render() {
    return (
      <Widget className="total-number-of-orders" title='订单总数'>
        <div>
          <NumberCard
            type='number'
            value={this.state.data}
            hideUnit={false}
          />
        </div>
      </Widget>
    );
  }
}

export default TotalNumberOfOrders;
