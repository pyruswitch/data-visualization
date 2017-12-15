import React, { Component } from 'react';
import { Widget, Title, NumberCard, PieChart } from 'components';
import callApi from 'api';

class Four extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'orderchannelcount',
      success: ({ wechat, alipay }) => {
        this.setState({
          data: [
            { name: '微信', value: Number(wechat) },
            { name: '支付宝', value: Number(alipay) }
          ]
        });
      }
    });
  }

  render() {
    const { title, size } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content chart">
          <PieChart
            width={size[0]}
            height={size[1] - 120}
            plotCfg={{ margin: [10, 100, 0, 0] }}
            data={this.state.data}
          />
        </div>
      </Widget>
    );
  }
}

export default Four;
