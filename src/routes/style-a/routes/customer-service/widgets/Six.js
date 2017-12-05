import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, StackedBarChart } from 'components';
import config from 'config';
import callApi from 'api';

class Six extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'taskstatus',
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
          <StackedBarChart
            height={size[1] - 50}
            width={size[0]}
            colY={{ alias: '单位：条' }}
            data={this.state.data}
          />
        </div>
      </Widget>
    );
  }
}

export default Six;
