import React, { Component } from 'react';
import { Box, Number, Widget } from 'routes/home/components';
import callApi from 'routes/home/api';

class TotalNumberOfOrders extends Component {
  constructor(props) {
    super(props);
    this.state = { data: 0 };
  }

  // componentDidMount() {
  //   callApi({
  //     api: 'ordercount',
  //     success: (response) => {
  //       this.setState({ data: response });
  //     }
  //   });
  // }


  render() {
    return (
      <Widget className="total-number-of-orders" title='订单总数'>
        <div>
          <Number
            type='number'
            value={4545}
            hideUnit={false}
          />
        </div>
      </Widget>
    );
  }
}

export default TotalNumberOfOrders;
