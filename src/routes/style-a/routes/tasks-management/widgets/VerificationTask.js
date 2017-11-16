import React, { Component } from 'react';
import { Widget, Box } from 'components';
import callApi from 'api';

class VerificationTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "name": "总数", "value": "--" },
        { "name": "待办", "value": "--" },
        { "name": "已办", "value": "--" },
        { "name": "已过期", "value": "--" },
        { "name": "完成率", "value": "--" },
      ]
    };
  }

  componentDidMount() {
    callApi({
      api: 'todayquality',
      success: (response) => {
        this.setState({ data: response });
      }
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Widget className="verification-task" title='今日核查任务'>
        <div className="number">
          <span>{data[0].value}</span>
          <div>
            <span>完成率</span>
            <span>{data[4].value}</span>
          </div>
          <div>
            <span>延误率</span>
            <span>--</span>
          </div>
        </div>
        <div className="box">
          <Box title="待办" number={data[1].value} />
          <Box title="已办" number={data[2].value} />
          <Box title="过期" number={data[3].value} />
        </div>
      </Widget>
    );
  }
}

export default VerificationTask;


// [
//   {"name": "总数", "value": 0},
//   {"name": "待办", "value": 0},
//   {"name": "已办", "value": 0},
//   {"name": "已过期", "value": 0},
//   {"name": "完成率", "value": "--"},
//   {"name": "及时响应率", "value": "--"}
// ]
