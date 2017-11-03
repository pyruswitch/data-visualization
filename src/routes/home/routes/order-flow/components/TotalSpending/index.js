import React, { Component } from 'react';
import { Box, Number, Widget } from 'routes/home/components';
import callApi from 'routes/home/api';

class TotalSpending extends Component {
  constructor(props) {
    super(props);
    this.state = { data: 0 };
  }

  // componentDidMount() {
  //   callApi({
  //     api: 'orderamount',
  //     success: (response) => {
  //       this.setState({ data: response });
  //     }
  //   });
  // }

  render() {
    return (
      <Widget className="total-spending" title='消费总额'>
        <div>
          <Number
            type='money'
            hideUnit={true}
            value={301079.41}
          />
        </div>
      </Widget>
    );
  }
}

export default TotalSpending;
