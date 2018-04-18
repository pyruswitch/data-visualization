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
      yearrental: 0,
      // 单位租金
      unitrental: 0
    };
  }
  // :
  // {unitrental: 0, yearrental: 0, leasedarea: "222036.14"}
  componentDidMount() {
    callApi({
      api: 'rentalamount',
      success: ({ unitrental, yearrental, leasedarea }) => {
        this.setState({ unitrental, yearrental, leasedarea });
      }
    });
  }

  render() {
    const { size, title } = this.props;
    const { unitrental, yearrental, leasedarea } = this.state;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content flex">
          <NumberCard value={Number(yearrental)} icon='person' type="number" />
          <Line />
          <Box title='在租面积' number={`${leasedarea}平方米`} />
          <Box title='单位租金' number={`${unitrental}元/天/平方米`} />
        </div>
      </Widget>
    );
  }
}

export default Three;
