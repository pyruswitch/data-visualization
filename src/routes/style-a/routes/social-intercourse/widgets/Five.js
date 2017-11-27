import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, Title, NumberCard, Box, Line } from 'components';
import champion from './../svg/champion.svg';
import second from './../svg/second.svg';
import third from './../svg/third.svg';
import callApi from 'api';
const DATA = [
  { type: '紧急通知', content: '园区将于本月16日进行水箱清洗作业', urgent: true, active: 2670 },
  { type: '问卷调查', content: '你有多久没有好好读一本书了', urgent: false, active: 1890 },
  { type: '话题讨论', content: '移动支付风暴来袭，你准备好了吗', urgent: false, active: 700 },
  { type: '问卷调查', content: '双十一你“剁手”了吗', urgent: false, active: 400 },
  { type: '意见征集', content: '最适合冬季的锻炼方式有哪些', urgent: false, active: 231 }
];

const types = [<img src={champion} />, <img src={second} />, <img src={third} />, 4, 5];

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
              <NumberCard value={169} icon='post' type="number" />
              <Line />
              <Box title='总回复数' number='2,357' />
              <Box title='总点赞数' number='5,013' />
            </div>
          </div>
          <div key="b" data-grid={{ x: 0, y: 6, w: 3, h: 3, static: true }}>
            <Title value="总阅读量" />
            <div className="widget-content flex">
              <NumberCard value={6985} icon='eye' type="number" />
            </div>
          </div>
          <div key="c" data-grid={{ x: 4, y: 0, w: 5, h: 9, static: true }}>
            <Title value="话题排行榜（top5）" />
            <div className='widget-content flex'>
              {
                DATA.map(({ type, content, urgent, active }, index) => (
                  <div className="top-line">
                    <span>{types[index]}</span>
                    <span>{`${type}│${content}`}</span>
                    <span><span>{urgent && '紧急通知'}</span></span>
                    <span>阅读量:&nbsp;&nbsp;{active}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </ReactGridLayout>
      </Widget>
    );
  }
}

export default Five;
