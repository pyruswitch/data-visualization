import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import './index.less';
const injectStyle = (style) => {
  const styleElement = document.createElement('style');
  let styleSheet = null;
  document.head.appendChild(styleElement);
  styleSheet = styleElement.sheet;
  styleSheet.insertRule(style, styleSheet.cssRules.length);
};


class CarouselTable extends Component {
  constructor(params) {
    super(params);
  }

  getTbody = () => {
    console.log('------getTbody')
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
      if (height * data.length > tableHeight)
        return styled.tbody``
      else
        return `animation: ${frames} ${data.length}s infinite linear;`
    } catch (error) {
      return styled.tbody``
    }
  }

  componentWillMount() {
    this.Tbody = this.getTbody();
  }

  componentDidUpdate(prevProps, prevState) {
    this.Tbody = this.getTbody();
  }

  render() {
    const { columns, data } = this.props;
    const Tbody = this.Tbody;
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
