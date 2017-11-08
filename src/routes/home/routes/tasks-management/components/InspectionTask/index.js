import React, { Component } from 'react';
import { Widget, Box } from 'routes/home/components';
import callApi from 'routes/home/api';

class InspectionTask extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="inspection-task" title='今日巡检任务'>
        <div className="number">
          <span>{'3,8222000'}</span>
        </div>
        <div className='box'>
          <Box title="待办" number='13,234' />
          <Box title="已办" number='13,234' />
          <Box title="过期" number='13,234' />
        </div>
      </Widget>
    );
  }
}

export default InspectionTask;
