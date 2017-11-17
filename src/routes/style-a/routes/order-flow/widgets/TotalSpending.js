import React, { Component } from 'react';
import { Box, NumberCard, Widget } from 'components';
import callApi from 'api';

class TotalSpending extends Component {
  constructor(props) {
    super(props);
    this.state = { data: 0 };
  }

  componentDidMount() {
    callApi({
      api: 'orderamount',
      success: (response) => {
        this.setState({ data: response });
      }
    });
  }

  render() {
    return (
      <Widget className="total-spending" title='消费总额'>
        <div>
          <NumberCard
            type='money'
            hideUnit={true}
            value={this.state.data}
          />
        </div>
      </Widget>
    );
  }
}

export default TotalSpending;
