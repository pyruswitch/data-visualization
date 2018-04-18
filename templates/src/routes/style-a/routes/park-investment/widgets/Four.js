import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Widget, NumberCard, Title, Line, Box, PieChart, CarouselTable } from 'components';
import config from 'config';
import callApi from 'api';
const columns = [
  { title: '企业名称', width: 'col-6', key: 'name' },
  { title: '行业类别', width: 'col-2', key: 'type' },
  { title: '企业规模', width: 'col-2', key: 'scale' },
  { title: '入驻门牌', width: 'col-2', key: 'adress' }
];

class Four extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    callApi({
      api: 'companyespon',
      success: (data) => {
        this.setState({ data });
      }
    });
  }


  render() {
    const { size, title } = this.props;
    const { data } = this.state;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content">
          <CarouselTable columns={columns} data={data} />
        </div>
      </Widget>
    );
  }
}

export default Four;
