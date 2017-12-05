import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, Title, NumberCard, Line, Box, PieChart } from 'components';
import callApi from 'api';

class Three extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 活动发布总数
      acttotal: 0,
      // 平均报名人次/场
      aveper: 0,
      // 活动报名总人次
      enroll: 0,
      data0: [],
      data1: []
    };
  }

  componentDidMount() {
    callApi({
      api: 'activityenrollment',
      success: ({ acttotal, aveper, enroll }) => {
        this.setState({ acttotal, aveper, enroll });
      }
    });
    callApi({
      api: 'activitytype',
      success: (response) => {
        this.setState({
          data0: response.map(({ name, value }) => ({ name, value: Number(value) }))
        });
      }
    });
    callApi({
      api: 'activityattention',
      success: (response) => {
        this.setState({
          data1: response.map(({ name, value }) => ({ name, value: Number(value) }))
        });
      }
    });
  }

  render() {
    const { size, title } = this.props;
    const { acttotal, aveper, enroll } = this.state;
    return (
      <Widget className="three">
        <ReactGridLayout
          cols={12}
          margin={[0, 0]}
          rowHeight={size[1]}
          width={size[0]}
        >
          <div key="a" data-grid={{ x: 0, y: 0, w: 4, h: 1, static: true }}>
            <Title value={title[0]} />
            <div className="widget-content flex">
              <NumberCard value={Number(enroll)} icon='person' type="number" />
              <Line />
              <Box title='活动发布总数' number={acttotal} />
              <Box title='平均报名人次/场' number={aveper} />
            </div>
          </div>
          <div key="b" data-grid={{ x: 4, y: 0, w: 4, h: 1, static: true }}>
            <Title value={title[1]} />
            <div className='widget-content chart' style={{ paddingBottom: 0 }}>
              <PieChart
                height={size[1] - 50}
                data={this.state.data0}
              />
            </div>
          </div>
          <div key="c" data-grid={{ x: 8, y: 0, w: 4, h: 1, static: true }}>
            <Title value={title[2]} />
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
