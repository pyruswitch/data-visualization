import React, { Component } from 'react';
import { Box, Widget, NumberCard, Line } from 'components';
import callApi from 'api';

class AnnualRentalIncome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 年租金
      rentalamount: 0,
      // 单位租金
      unitrental: 0,
      // 在租面积
      leasedarea: 0
    };
  }

  componentDidMount() {
    callApi({
      api: 'rentalamount',
      success: ({ value }) => {
        this.setState({ rentalamount: Number(value) });
      }
    });
    callApi({
      api: 'unitrental',
      success: ({ value }) => {
        this.setState({ unitrental: Number(value) });
      }
    });
    callApi({
      api: 'leasedarea',
      success: ({ value }) => {
        this.setState({ leasedarea: Number(value) });
      }
    });
  }

  render() {
    const { leasedarea, unitrental, rentalamount } = this.state;
    return (
      <Widget className="annual-rental-income" title='年租金收入'>
        <div className="animate-number">
          <NumberCard type='money' value={123} hideUnit={true} />
        </div>
        <Line />
        <div className="box">
          <Box title='在租面积' number={leasedarea} unit='㎡' />
          <Box title='单位租金' number={unitrental} unit='元/㎡' />
        </div>
      </Widget>
    );
  }
}

export default AnnualRentalIncome;
