import React, { Component } from 'react';
import { Widget, PieChart } from 'components';
import callApi from 'api';

class Investment extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: 'inviteBusiness',
      success: (response) => {
        const data = response.map(({ value, name }) => ({ name, value: Number(value) }));
        this.setState({ data });
      }
    });
  }

  render() {
    return (
      <Widget className="investment" title='招商引资'>
        <PieChart data={this.state.data} />
      </Widget>
    );
  }
}

export default Investment;



// [
//   { name: '已到期', value: 56.33 },
//   { name: '合同期', value: 24.03 },
//   { name: '申请入驻', value: 10.38 },
//   { name: '商务沟通', value: 4.77 }
// ]
