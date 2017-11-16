import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import './index.less';

class CarouselTable extends Component {
  constructor(params) {
    super(params);
    this.alreadyUpdate=false;
    this.state={Tbody:styled.tbody``}
  }

  getTbody = () => {
    try {
      const { data } = this.props;
      const el = this.tbody.querySelector('tr');
      const height = window.getComputedStyle(el, null).height.match(/\d+.*\d+/)[0];
      const tableHeight = Number(window.getComputedStyle(this.table).height.match(/\d{1,}/));
      const frames = keyframes`
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-${height * data.length}px);
          }
      `;
      // 避免update死循环
      this.alreadyUpdate=true;
      if (Number(height) * data.length > tableHeight)
       this.setState({Tbody: styled.tbody`animation: ${frames} ${data.length}s infinite linear;`})
    } catch (error) {
      // do nothing
      console.log(error)
    }
  }

  componentDidUpdate(prevProps, prevState) {
      if(this.alreadyUpdate===false)
        this.Tbody = this.getTbody();
  }

  render() {
    const { columns, data } = this.props;
    const Tbody = this.state.Tbody;
    return (
      <div
        ref={table => { this.table = table; }}
        className="eh-data-carousel-table"
      >
        <div>
          <table>
            <thead>
              <tr>
                {
                  columns.map(({ width, title }, index) => (
                    <th key={index} className={width}>{title}</th>
                  ))
                }
              </tr>
            </thead>
          </table>
          <table>
            <Tbody innerRef={tbody => { this.tbody = tbody; }} >
              {
                data.map((value, index) => (
                  <tr key={index}>
                    {
                      columns.map(({ key, width }, index) => (
                        <td className={width} key={`${key} -${index} `}>{value[key]}</td>
                      ))
                    }
                  </tr>
                ))
              }
            </Tbody>
          </table>
        </div>
      </div>);
  }
}

CarouselTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};
export default CarouselTable;
