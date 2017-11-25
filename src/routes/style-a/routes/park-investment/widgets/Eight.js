import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, Histogram } from 'components';
import config from 'config';
import callApi from 'api';

class Eight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "众创空间", value: 99 },
        { name: "孵化器", value: 97 },
        { name: "总部公园", value: 79 }
      ]
    };
  }

  render() {
    const { size, title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart">
          <Histogram
            noTitle
            height={size[1] - 50}
            width={size[0]}
            data={this.state.data}
            colY={{
              formatter: dimValue => `${dimValue}%`
            }}
          />
        </div>
      </Widget>
    );
  }
}

export default Eight;

