import React, { Component } from 'react';
import { Widget, Title, CarouselTable, Tabs } from 'components';
import callApi from 'api';
const columns = [
  { title: '帖子标题', width: 'col-5', key: 'title' },
  { title: '标签', width: 'col-2', key: 'type' },
  { title: '发布时间', width: 'col-3', key: 'date' },
  { title: '阅读量', width: 'col-2', key: 'active' }
];

let DATA1 = [
  { title: '让我们一起来聊聊未来的“家”', date: '10/9 10:00', type: '讨论', active: '877' },
  { title: '创新园跨年活动方案征集', date: '11/27 14:16', type: '征集', active: '660' },
  { title: '创新园美景随拍作品征集', date: '10/22 10:00', type: '征集', active: '2344' },
  { title: '求助，本人走失了一条泰迪犬', date: '11/22 19:20', type: '求助', active: '190' },
  { title: '想周末去郊外野餐，有推荐的地方没', date: '11/27 10:38', type: '征集', active: '260' },
  { title: '我公司即将开启B轮融资，欢迎加入', date: '11/21 13:30', type: '新闻', active: '329' },
  { title: '首届“北科建”杯电商客服技能大赛开始报名啦', date: '11/27 10:40', type: '新闻', active: '215' },
  { title: '创新园义工队欢迎您的加入', date: '11/2 10:20', type: '征集', active: '1396' },
  { title: '创业英语角即将成立了', date: '11/15 8:55', type: '新闻', active: '223' }
];
let DATA0 = [
  { title: '专利申请的挖掘和专利的布局主题沙龙', date: '11/23 10:30', type: '沙龙', active: '2018' },
  { title: '网络搜索优化，让互联网聆听你的声音主题沙龙', date: '11/16 9:31', type: '沙龙', active: '877' },
  { title: '税务基础知识培训', date: '11/19 10:55', type: '培训', active: '1499' },
  { title: '创意产业园举办免息贷款主题讲座', date: '11/22 14:10', type: '创客', active: '409' },
  { title: '互联网时代室内装饰的发展主题讲座', date: '11/2 10:34', type: '讲座', active: '110' },
  { title: '社保和公积金的那些事儿', date: '11/24 10:00', type: '讲座', active: '630' },
  { title: '园区管理办商务礼仪培训', date: '11/17 11:50', type: '培训', active: '2661' },
  { title: '职场充电宝之产品经理入门秘籍', date: '11/16 11:30', type: '讲座', active: '1133' },
  { title: '科技企业融资路演聚合大会', date: '11/19 10:40', type: '创客', active: '29' },
  { title: '基于Excel的数据分析决策建模培训', date: '11/9  15:30', type: '培训', active: '108' },
  { title: '财商提升训练营——现金流游戏财富沙龙', date: '11/24 10:40', type: '沙龙', active: '430' },
  { title: '社保公积金缴纳及提取要点讲座', date: '11/23 17:00', type: '讲座', active: '127' },
  { title: '高效能团队管理的几个表现', date: '11/27 10:10', type: '创客', active: '29' },
];

const DATA = [DATA0, DATA1];

class Four extends Component {
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
    return (
      <Widget className="four">
        <Tabs title="最新发布">
          {
            ['活动', '帖子'].map((value, index) => (
              <Tabs.TabPane tab={value} key={index}>
                <CarouselTable columns={columns} data={DATA[index]} />
              </Tabs.TabPane>
            ))
          }
        </Tabs>
      </Widget>
    );
  }
}

export default Four;
