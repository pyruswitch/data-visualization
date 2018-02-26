import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, Histogram } from 'components';
import config from 'config';
import callApi from 'api';

class Five extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'tasktyperespon',
      success: (data) => {
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
          <Histogram
            data={this.state.data}
            height={size[1] - 50}
            width={size[0]}
            colY={{
              type: 'linear',
              alias: '单位:天'
            }}
          />
        </div>
      </Widget>
    );
  }
}

export default Five;
