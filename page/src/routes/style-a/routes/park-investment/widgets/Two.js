import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, PieChart } from 'components';
import config from 'config';
import callApi from 'api';

class Two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contract: 0,
      enterprisestotal: 0,
      expiration: 0
    };
  }

  componentDidMount() {
    callApi({
      api: 'settledenter',
      success: ({ contract, enterprisestotal, expiration }) => {
        this.setState({ contract, enterprisestotal, expiration });
      }
    });
  }

  render() {
    const { size, title } = this.props;
    const { contract, enterprisestotal, expiration } = this.state;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content flex">
          <NumberCard value={Number(enterprisestotal)} icon='person' type="number" />
          <Line />
          <Box title='今年签约数' number={contract} />
          <Box title='今年到期数' number={expiration} />
        </div>
      </Widget>
    );
  }
}

export default Two;
