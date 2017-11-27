import React, { Component } from 'react';
import { Widget, Title, CarouselTable, Tabs } from 'components';
import callApi from 'api';
const columns = [
  { title: '任务类型', width: 'col-2', key: 'type' },
  { title: '详情', width: 'col-8', key: 'title' },
  { title: '日期', width: 'col-2', key: 'date' }
];

let DATA = [
  { title: '33号楼洗手间热水器水温过高', date: '11/27 8:58', type: '物业报修' },
  { title: '16号楼下水道有异味', date: '11/27 8:40', type: '物业报修' },
  { title: '18号楼会议室灯管坏了', date: '11/27 8:30', type: '物业报修' },
  { title: '装修物料进出申请办理出入证', date: '11/26 16:00', type: '物品放行' },
  { title: '29号楼220室申请迁出', date: '11/26 11:20', type: '迁入迁出' },
  { title: '27号楼申请迁入', date: '11/25 8:57', type: '迁入迁出' },
  { title: '申请预定贝壳创客空间工位两个', date: '11/25 12:18', type: '工位预订' },
  { title: '53号楼申请室内软装', date: '11/24 12:50', type: '装修' },
  { title: '46号楼申请装修处理', date: '11/19 8:00', type: '装修' },
  { title: '66号楼101室申请装修服务', date: '11/16 16:00', type: '装修' },
  { title: '申请办理增值税服务业务', date: '11/15 10:56', type: '企业增值税服务' },
  { title: '27号楼申请迁入', date: '11/26 8:57', type: '迁入迁出' },
  { title: '2 9号楼申请迁入', date: '11/26 9:50', type: '迁入迁出' }
];
class Two extends Component {
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
    const { title } = this.props;
    return (
      <Widget>
        <Title value={title[0]} />
        <div className="widget-content">
          <CarouselTable columns={columns} data={DATA} />
        </div>
      </Widget>
    );
  }
}

export default Two;
