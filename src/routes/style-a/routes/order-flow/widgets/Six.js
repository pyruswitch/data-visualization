import React, { Component } from 'react';
import { Widget, Title, NumberCard, Histogram } from 'components';
import callApi from 'api';

class Six extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "租金", value: 46 },
        { name: "电商", value: 20 },
        { name: "停车费", value: 18 },
        { name: "物业费", value: 7 },
        { name: "会议室预定", value: 4 },
        { name: "其他", value: 5 }
      ]
    };
  }

  componentDidMount() {
    callApi({
      api: 'ordertypecount',
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
            noTitle
            data={this.state.data}
            height={size[1] - 50}
            width={size[0]}
            colY={{ formatter: dimValue => `${dimValue}%` }}
          />
        </div>
      </Widget>
    );
  }
}

export default Six;
