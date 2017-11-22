import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, Title, NumberCard, Box, Line } from 'components';
import champion from './../svg/champion.svg';
import second from './../svg/second.svg';
import third from './../svg/third.svg';
import four from 'components/base-components/Number/StyleB/4.svg';
import five from 'components/base-components/Number/StyleB/5.svg';
import callApi from 'api';

class Five extends Component {
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
    return (
      <Widget className="five" >
        <ReactGridLayout
          cols={8}
          margin={[0, 0]}
          rowHeight={size[1] / 9}
          width={size[0]}
        >
          <div key="a" data-grid={{ x: 0, y: 0, w: 3, h: 6, static: true }}>
            <Title value="帖子发布总数" />
            <div className="widget-content flex">
              <NumberCard value={123} icon='post' type="number" />
              <Line />
              <Box title='周新增用户' number='21,728' />
              <Box title='日新增用户' number='21,728' />
            </div>
          </div>
          <div key="b" data-grid={{ x: 0, y: 6, w: 3, h: 3, static: true }}>
            <Title value="总阅读量" />
            <div className="widget-content flex">
              <NumberCard value={123} icon='eye' type="number" />
            </div>
          </div>
          <div key="c" data-grid={{ x: 4, y: 0, w: 5, h: 9, static: true }}>
            <Title value="话题排行榜（top5）" />
            <div className='widget-content flex'>
              <div className="top-line">
                <span><img src={champion} /></span>
                <span>话题│一座竹楼掩映在绯红深处，青翠的竹林在雨后更显清…</span>
                <span><span>紧急通知</span></span>
                <span>阅读量:&nbsp;&nbsp;80K</span>
              </div>
              <div className="top-line">
                <span><img src={second} /></span>
                <span>话题│一座竹楼掩映在绯红深处，青翠的竹林在雨后更显清…</span>
                <span><span>紧急通知</span></span>
                <span>阅读量:&nbsp;&nbsp;80K</span>
              </div>
              <div className="top-line">
                <span><img src={third} /></span>
                <span>话题│一座竹楼掩映在绯红深处，青翠的竹林在雨后更显清绯红深处，青翠的竹林在雨后更显绯红深处，青翠的竹林在雨后更显清</span>
                <span><span>紧急通知</span></span>
                <span>阅读量:&nbsp;&nbsp;80K</span>
              </div>
              <div className="top-line">
                <span />
                <span>话题│一座竹楼掩映在绯红深处，青翠的竹林在雨后更显清…</span>
                <span><span>紧急通知</span></span>
                <span>阅读量:&nbsp;&nbsp;80K</span>
              </div>
              <div className="top-line">
                <span />
                <span>话题│一座竹楼掩映在绯红深处，青翠的竹林在雨后更显清…</span>
                <span><span>紧急通知</span></span>
                <span>阅读量:&nbsp;&nbsp;80K</span>
              </div>
            </div>
          </div>
        </ReactGridLayout>
      </Widget>
    );
  }
}

export default Five;
