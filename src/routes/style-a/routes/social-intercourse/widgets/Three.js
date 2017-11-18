import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, Title, NumberCard, Line, Box, PieChart } from 'components';
import callApi from 'api';

class Three extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "type": "男性",
          "value": 32
        },
        {
          "type": "女性",
          "value": 40
        },
        {
          "type": "其他",
          "value": 40
        }
      ].map(({ type, value }) => ({ name: type, value: Number(value) })),
    };
  }

  componentDidMount() {
    // callApi({
    //   api: 'companyespon',
    //   success: (response) => {
    //     this.setState({ data: response });
    //     console.log(response);
    //   }
    // });
  }

  render() {
    const { size } = this.props;
    return (
      <Widget className="three">
        <ReactGridLayout
          cols={12}
          margin={[0, 0]}
          rowHeight={size[1]}
          width={size[0]}
        >
          <div key="a" data-grid={{ x: 0, y: 0, w: 4, h: 1, static: true }}>
            <Title value="活动报名总人次" />
            <div className="content">
              <NumberCard value={123} icon='person' type="number" />
              <Line />
              <div>
                <Box title='周新增用户' number='21,728' />
                <Box title='日新增用户' number='21,728' />
              </div>
            </div>
          </div>
          <div key="b" data-grid={{ x: 4, y: 0, w: 4, h: 1, static: true }}>
            <Title value="活动标签分布" />
            <PieChart
              height={size[1] - 50}
              data={this.state.data}
            />
          </div>
          <div key="c" data-grid={{ x: 8, y: 0, w: 4, h: 1, static: true }}>
            <Title value="活动热度分布" />
            <PieChart
              height={size[1] - 50}
              data={this.state.data}
            />
          </div>
        </ReactGridLayout>
      </Widget>
    );
  }
}

export default Three;
