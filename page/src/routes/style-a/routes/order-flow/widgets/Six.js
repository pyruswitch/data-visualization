import React, { Component } from 'react';
import { Widget, Title, NumberCard, Histogram } from 'components';
import callApi from 'api';

class Six extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'ordertypecount',
      success: (data) => {
        this.setState({ data });
      }
    });
  }

  render() {
    const { title, size } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart">
          <Histogram
            data={this.state.data}
            height={size[1] - 50}
            width={size[0]}
            colY={{
              type: 'linear',
              alias: '个数统计'
            }}
          />
        </div>
      </Widget>
    );
  }
}

export default Six;
