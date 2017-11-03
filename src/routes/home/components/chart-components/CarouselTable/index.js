import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';
const injectStyle = (style) => {
  const styleElement = document.createElement('style');
  let styleSheet = null;
  document.head.appendChild(styleElement);
  styleSheet = styleElement.sheet;
  styleSheet.insertRule(style, styleSheet.cssRules.length);
};


class CarouselTable extends Component {
  componentDidUpdate(prevProps, prevState) {
    try {
      const { data } = this.props;
      const el = this.refs.tbody.querySelector('tr');
      const height = window.getComputedStyle(el, null).height.match(/\d+.*\d+/)[0];
      const keyframesStyle = `
          @-webkit-keyframes move {
              from {
                  transform: translateY(0);
              }
              to {
                  transform: translateY(-${height * data.length}px);
              }
          }`;
      injectStyle(keyframesStyle);
    } catch (error) {

    }
  }

  componentDidMount() {
    try {
      const { data } = this.props;
      const el = this.refs.tbody.querySelector('tr');
      const height = window.getComputedStyle(el, null).height.match(/\d+.*\d+/)[0];
      const keyframesStyle = `
          @-webkit-keyframes move {
              from {
                  transform: translateY(0);
              }
              to {
                  transform: translateY(-${height * data.length}px);
              }
          }`;
      injectStyle(keyframesStyle);
    } catch (error) {

    }
  }


  render() {
    const { columns, data } = this.props;
    return (
      <div className="eh-data-carousel-table">
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
            <tbody ref='tbody' className='rowup' style={{ animation: `move ${data.length}s infinite linear` }}>
              {
                data.map((value, index) => (
                  <tr key={index}>
                    {
                      columns.map(({ key, width }, index) => (
                        <td className={width} key={`${key}-${index}`}>{value[key]}</td>
                      ))
                    }
                  </tr>
                ))
              }
            </tbody>
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
