import React, { Component } from 'react';
import { Box, Number, Widget } from 'routes/home/components';
import callApi from 'routes/home/api';


class NumberOfCompaniesSettled extends Component {
  constructor(props) {
    super(props);
    this.state = { expiration: 11, numberOfContracts: 31, total: 196 };
  }

  // componentDidMount() {
  //   callApi({
  //     api: 'settledenter',
  //     success: (response) => {
  //       // 后台接口不靠谱，防止意外报错
  //       try {
  //         this.setState({ expiration: response[2].value, numberOfContracts: response[1].value, total: response[0].value });
  //       } catch (error) { }
  //     }
  //   });
  // }

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
