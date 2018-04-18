import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, PieChart } from 'components';
import config from 'config';
import callApi from 'api';

class Six extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'inviteBusiness',
      success: (response) => {
        this.setState({
          data: response.map(({ name, value }) => (
            { name, value: Number(value) }))
        });
      }
    });
  }


  render() {
    const { size, title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart" style={{ paddingBottom: 0 }}>
          <PieChart
            width={size[0]}
            height={size[1] - 70}
            data={this.state.data}
          />
        </div>
      </Widget>
    );
  }
}

export default Six;


