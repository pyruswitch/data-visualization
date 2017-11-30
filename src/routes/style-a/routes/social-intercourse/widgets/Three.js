import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, Title, NumberCard, Line, Box, PieChart } from 'components';
import callApi from 'api';

class Three extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data0: [
        { name: "旅游", value: 3 },
        { name: "创客", value: 1 },
        { name: "篮球", value: 3 },
        { name: "沙龙", value: 4 }
      ],
      data1: [
        { name: "旅游", value: 700 },
        { name: "创客", value: 800 },
        { name: "篮球", value: 244 },
        { name: "沙龙", value: 910 }
      ]
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
            <div className="widget-content flex">
              <NumberCard value={2654} icon='person' type="number" />
              <Line />
              <Box title='活动发布总数' number='11' />
              <Box title='平均报名人次/场' number='32' />
            </div>
          </div>
          <div key="b" data-grid={{ x: 4, y: 0, w: 4, h: 1, static: true }}>
            <Title value="活动标签分布" />
            <div className='widget-content chart' style={{ paddingBottom: 0 }}>
              <PieChart
                height={size[1] - 50}
                data={this.state.data0}
              />
            </div>
          </div>
          <div key="c" data-grid={{ x: 8, y: 0, w: 4, h: 1, static: true }}>
            <Title value="活动热度分布" />
            <div className='widget-content chart' style={{ paddingBottom: 0 }}>
              <PieChart
                height={size[1] - 50}
                data={this.state.data1}
              />
            </div>
          </div>
        </ReactGridLayout>
      </Widget>
    );
  }
}

export default Three;
