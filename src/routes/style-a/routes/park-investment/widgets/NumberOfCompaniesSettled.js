import React, { Component } from 'react';
import { Box, Number, Widget } from 'components';
import callApi from 'api';


class NumberOfCompaniesSettled extends Component {
  constructor(props) {
    super(props);
    this.state = { expiration: 0, numberOfContracts: 0, total: 0 };
  }

  componentDidMount() {
    callApi({
      api: 'settledenter',
      success: (response) => {
        this.setState({ expiration: response[2].value, numberOfContracts: response[1].value, total: response[0].value });
      }
    });
  }

  render() {
    const { expiration, numberOfContracts, total } = this.state;
    return (
      <Widget className='number-of-companies-settled' title='入驻企业数'>
        <div className='number'>
          <span>{total}</span>
        </div>
        <div className="box">
          <Box title='今年签约数' number={numberOfContracts} />
          <Box title='今年到期数' number={expiration} />
        </div>
      </Widget>
    );
  }
}

export default NumberOfCompaniesSettled;
