import React, { Component } from 'react';
import { Widget, Box } from 'routes/home/components';
import callApi from 'routes/home/api';

class InspectionTask extends Component {
  constructor(props) {
    super(props);
    this.state={data:[
      {"name": "总数", "value": "--"},
      {"name": "待办", "value": "--"},
      {"name": "已办", "value": "--"},
      {"name": "已过期", "value": "--"},
      {"name": "完成率", "value": "--"},
    ]};
  }

 componentDidMount() {
  callApi({
    api:'todayequipment',
    success:(response)=>{
      this.setState({data:response});
    }
  });
 }

  render() {
    const {data}=this.state;
    return (
      <Widget className="inspection-task" title='今日巡检任务'>
        <div className="number">
          <span>{data[0].value}</span>
        </div>
        <div className='box'>
          <Box title="待办" number={data[1].value} />
          <Box title="已办" number={data[2].value} />
          <Box title="过期" number={data[3].value} />
        </div>
      </Widget>
    );
  }
}

export default InspectionTask;

// [
// {"name": "总数", "value": 0},
// {"name": "待办", "value": 0},
// {"name": "已办", "value": 0},
// {"name": "已过期", "value": 0},
// {"name": "完成率", "value": "--"},
// {"name": "及时响应率", "value": "--"}
// ]
