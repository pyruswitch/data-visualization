import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box } from 'components';
import config from 'config';
import callApi from 'api';

class One extends Component {
  constructor(props) {
    super(props);
    // this.state = { data: [] };
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
    console.log(size[0] * config.size[0]);
    console.log(size[0], config.size);
    return (
      <Widget className="one" >
        <ReactGridLayout
          cols={12}
          margin={[0, 0]}
          rowHeight={size[1] / 12}
          width={size[0]}
        >
          <div key="a" data-grid={{ x: 0, y: 0, w: 6, h: 6, static: true }}>
            <Title value="新注册用户" />
            <div className="content">
              <NumberCard value={123} type="number" />
              <Line />
              <div>
                <Box title='人数' number='21,728' />
                <Box title='人数' number='21,728' />
              </div>
            </div>
          </div>
          <div key="b" data-grid={{ x: 6, y: 0, w: 6, h: 6, static: true }}>
            <Title value="性别比例" />
          </div>
          <div key="c" data-grid={{ x: 0, y: 6, w: 6, h: 6, static: true }}>
            <Title value="月活跃用户" />
            <div className="content">
              <NumberCard value={123} type="number" />
              <Line />
              <div>
                <Box title='人数' number='21,728' />
                <Box title='人数' number='21,728' />
              </div>
            </div>
          </div>
          <div key="d" data-grid={{ x: 6, y: 6, w: 6, h: 6, static: true }}>
            <Title value="设备终端" />
          </div>
        </ReactGridLayout>
      </Widget>
    );
  }
}

export default One;
