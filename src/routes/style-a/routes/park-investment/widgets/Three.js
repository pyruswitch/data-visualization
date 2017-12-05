import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, PieChart } from 'components';
import config from 'config';
import callApi from 'api';

class Three extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 在租面积
      leasedarea: 0,
      // 年租金收入
      rentalamount: 0,
      // 单位租金
      unitrental: 0
    };
  }

  componentDidMount() {
    callApi({
      api: 'leasedarea',
      success: ({ value }) => {
        this.setState({ leasedarea: value });
      }
    });
    callApi({
      api: 'rentalamount',
      success: ({ value }) => {
        this.setState({ rentalamount: value });
      }
    });
    callApi({
      api: 'unitrental',
      success: ({ value }) => {
        this.setState({ unitrental: value });
      }
    });
  }

  render() {
    const { size, title } = this.props;
    const { unitrental, rentalamount, leasedarea } = this.state;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content flex">
          <NumberCard value={Number(rentalamount)} icon='person' type="number" />
          <Line />
          <Box title='在租面积' number={`${leasedarea}平方米`} />
          <Box title='单位租金' number={`${unitrental}元/天/平方米`} />
        </div>
      </Widget>
    );
  }
}

export default Three;
