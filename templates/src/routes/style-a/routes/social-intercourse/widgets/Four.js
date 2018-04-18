import React, { Component } from 'react';
import { Widget, Title, CarouselTable, Tabs } from 'components';
import callApi from 'api';
const columns = [
  { title: '帖子标题', width: 'col-5', key: 'name' },
  { title: '标签', width: 'col-2', key: 'type' },
  { title: '发布时间', width: 'col-3', key: 'time' },
  { title: '阅读量', width: 'col-2', key: 'value' }
];

class Four extends Component {
  constructor(props) {
    super(props);
    this.state = { data0: [], data1: [] };
  }

  componentDidMount() {
    callApi({
      api: 'newactivity',
      success: (data0) => {
        this.setState({ data0 });
      }
    });
    callApi({
      api: 'newforum',
      success: (data1) => {
        this.setState({ data1 });
      }
    });
  }

  render() {
    const { title } = this.props;
    return (
      <Widget style={{ paddingBottom: '24px' }}>
        <Tabs title={title}>
          {
            ['活动', '帖子'].map((value, index) => (
              <Tabs.TabPane tab={value} key={index}>
                <CarouselTable columns={columns} data={this.state[`data${index}`]} />
              </Tabs.TabPane>
            ))
          }
        </Tabs>
      </Widget>
    );
  }
}

export default Four;
