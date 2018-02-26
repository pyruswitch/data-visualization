import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, Title, NumberCard, Box, Line } from 'components';
import champion from './../svg/champion.svg';
import second from './../svg/second.svg';
import third from './../svg/third.svg';
import callApi from 'api';
const types = [<img src={champion} />, <img src={second} />, <img src={third} />, 4, 5];

class Five extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likecount: 0,
      post: 0,
      reply: 0,
      viewcount: 0,
      list: [],
    };
  }

  componentDidMount() {
    callApi({
      api: 'forumthreads',
      success: ({ likecount, post, reply, viewcount }) => {
        this.setState({ likecount, post, reply, viewcount });
      }
    });
    callApi({
      api: 'trendingtopics',
      success: (list) => {
        this.setState({ list });
      }
    });
  }

  render() {
    const { size, title } = this.props;
    const { list, likecount, post, reply, viewcount } = this.state;
    return (
      <Widget className="five" >
        <ReactGridLayout
          cols={8}
          margin={[0, 0]}
          rowHeight={size[1] / 9}
          width={size[0]}
        >
          <div key="a" data-grid={{ x: 0, y: 0, w: 3, h: 6, static: true }}>
            <Title value={title[0]} />
            <div className="widget-content flex">
              <NumberCard value={Number(post)} icon='post' type="number" />
              <Line />
              <Box title='总回复数' number={reply} />
              <Box title='总点赞数' number={likecount} />
            </div>
          </div>
          <div key="b" data-grid={{ x: 0, y: 6, w: 3, h: 3, static: true }}>
            <Title value={title[2]} />
            <div className="widget-content flex">
              <NumberCard value={Number(viewcount)} icon='eye' type="number" />
            </div>
          </div>
          <div key="c" data-grid={{ x: 4, y: 0, w: 5, h: 9, static: true }}>
            <Title value={title[1]} />
            <div className='widget-content flex'>
              {
                list.slice(0, 5).map(({ type, name, urgent, value }, index) => (
                  <div className="top-line">
                    <span>{types[index]}</span>
                    <span>{`${name}`}</span>
                    <span><span>{`${type}`}</span></span>
                    <span>阅读量:&nbsp;&nbsp;{value}</span>
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
