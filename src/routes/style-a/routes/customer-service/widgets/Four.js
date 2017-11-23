import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, RadarChart } from 'components';
import config from 'config';
import callApi from 'api';

class Four extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    callApi({
      api: 'boardvita',
      success: (response) => {
        const data = response.map(({ name, value }) => (Object.assign({}, { name: 'aha' }, { categories: name, value })));
        this.setState({ data });
      }
    });
  }

  render() {
    const { size } = this.props;
    return (
      <Widget className="four" >
        <Title value="服务模块活跃度" />
        <div className="widget-content chart">
          <RadarChart
            height={size[1] - 50}
            data={this.state.data}
          />
        </div>
      </Widget>
    );
  }
}

export default Four;
