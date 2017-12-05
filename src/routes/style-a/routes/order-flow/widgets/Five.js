import React, { Component } from 'react';
import { Widget, Title, NumberCard, Histogram } from 'components';
import callApi from 'api';

class Five extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "租金", value: 10 },
        { name: "电商", value: 1 },
        { name: "停车费", value: 2 },
        { name: "物业费", value: 1 },
        { name: "其他", value: 0.2 }
      ]
    };
  }

  componentDidMount() {
    callApi({
      api: 'ordertypeamount',
      success: () => {

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
            colY={{ type: 'linear', alias: '单位：万元' }}
          />
        </div>
      </Widget>
    );
  }
}

export default Five;
