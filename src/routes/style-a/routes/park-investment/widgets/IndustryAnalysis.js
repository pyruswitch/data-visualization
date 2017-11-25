import React, { Component } from 'react';
import { Widget, PieChart } from 'components';
import callApi from 'api';

class IndustryAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    callApi({
      api: "companytype",
      success: (response) => {
        const data = response.map(({ name, value }) => ({ name, value: Number(value) }));
        this.setState({ data });
      }
    });
  }

  render() {
    return (
      <Widget className="industry-analysis" title='行业分析'>
        <PieChart data={this.state.data} />
      </Widget>
    );
  }
}

export default IndustryAnalysis;


