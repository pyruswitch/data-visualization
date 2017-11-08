import React, { Component } from 'react';
import { Widget } from 'routes/home/components';
import callApi from 'routes/home/api';

class TaskType extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="task-type" title='任务类型分布'>

      </Widget>
    );
  }
}

export default TaskType;
