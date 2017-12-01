import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, RadarChart } from 'components';
import config from 'config';
import callApi from 'api';

class Four extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "value": "3", "name": "交流大厅" },
        { "value": "4", "name": "停车充值" },
        { "value": "4", "name": "创客空间" },
        { "value": "1", "name": "园区企业" },
        { "value": "48", "name": "园区入驻" },
        { "value": "3", "name": "服务联盟" }
      ].map(({ name, value }) => (Object.assign({}, { name: 'aha' }, { categories: name, value })))
    };
  }

  // componentDidMount() {
  //   callApi({
  //     api: 'boardvita',
  //     success: (response) => {
  //       const data = response.map(({ name, value }) => (Object.assign({}, { name: 'aha' }, { categories: name, value })));
  //       this.setState({ data });
  //     }
  //   });
  // }

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
