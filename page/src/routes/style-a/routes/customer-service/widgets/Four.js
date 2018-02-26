import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, RadarChart } from 'components';
import config from 'config';
import callApi from 'api';

class Four extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'boardvita',
      success: (response) => {
        const data = response.map(({ name, value }) => (Object.assign({}, { name: '1' }, { categories: name, value })));
        this.setState({ data });
      }
    });
  }

  render() {
    const { title, size } = this.props;
    return (
      <Widget>
        <Title value={title[0]} />
        <div className="widget-content chart">
          <RadarChart
            height={size[1] - 70}
            data={this.state.data}
          />
        </div>
      </Widget>
    );
  }
}

export default Four;
