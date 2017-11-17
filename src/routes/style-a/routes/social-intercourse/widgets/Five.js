import React, { Component } from 'react';
import { Widget } from 'components';
import callApi from 'api';

class Five extends Component {
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
      <Widget className="five" >

      </Widget>
    );
  }
}

export default Five;
