import React, { Component } from 'react';
import { Widget, Title, CarouselTable, Tabs } from 'components';
import callApi from 'api';
const columns = [
  { title: '任务类型', width: 'col-2', key: 'name' },
  { title: '详情', width: 'col-8', key: 'content' },
  { title: '日期', width: 'col-2', key: 'date' }
];

class Two extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'pengdingtask',
      success: (data) => {
        this.setState({ data });
      }
    });
  }

  render() {
    const { title } = this.props;
    const { data } = this.state;
    return (
      <Widget>
        <Title value={title[0]} />
        <div className="widget-content">
          <CarouselTable columns={columns} data={data} />
        </div>
      </Widget>
    );
  }
}

export default Two;
