import React, { Component } from 'react';
import { Widget, Title, NumberCard, LineChart } from 'components';
import callApi from 'api';

class Three extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      data: []
    };
  }

  componentDidMount() {
    callApi({
      api: 'monthcount',
      success: (data) => {
        this.setState({
          data: data.map((value) => ({ name: value[0], value: Number(value[1]) }))
        });
      }
    });
    callApi({
      api: 'ordercount',
      success: (total) => {
        this.setState({ total });
      }
    });
  }

  render() {
    const { data, total } = this.state;
    const { title, size } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart">
          <LineChart
            data={data}
            colX={{ formatter: (dimValue) => (`${dimValue}月`) }}
            colY={{ alias: '园区每月订单量' }}
            width={size[0]}
            height={size[1] - 50}
          />
        </div>
        <NumberCard value={Number(total)} hasBg type='number' />
      </Widget>
    );
  }
}

export default Three;
