import React, { Component } from 'react';
import { Widget, StackedBarChart, Title, LineChart } from 'components';
import callApi from 'api';
import config from 'config';
const { height } = config;

class Five extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    callApi({
      api: 'buildmonthelectr',
      success: (data) => {
        this.setState({ data });
      }
    });
  }

  render() {
    const { size, title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart">
          <LineChart
            data={this.state.data}
            colY={{ alias: '单位：KW.H' }}
            width={size[0]}
            height={size[1] - 150}
          />
        </div>
      </Widget>
    );
  }
}

export default Five;
