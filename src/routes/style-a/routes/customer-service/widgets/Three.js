import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, PieChart } from 'components';
import config from 'config';
import callApi from 'api';

class Three extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'tasktypecount',
      success: (response) => {
        this.setState({
          data: response.map(({ name, value }) =>
            ({ name, value: Number(value) }))
        });
      }
    });
  }

  render() {
    const { title, size } = this.props;
    return (
      <Widget>
        <Title value={title[0]} />
        <div className="widget-content chart">
          <PieChart data={this.state.data} height={size[1] - 100} />
        </div>
      </Widget>
    );
  }
}

export default Three;
