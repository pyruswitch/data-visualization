import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Unit, Bg, Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Comma, Point, Money } from './svg';
import classNames from 'classnames';
import './index.less';

// 字符串转成对应的svg
const strToSvg = (number) => {
  let svgNumber = [];
  number.toString().split("").forEach((symbol => {
    switch (symbol) {
      case '0': svgNumber.push({ svg: Zero, type: 'numerals' }); break;
      case '1': svgNumber.push({ svg: One, type: 'numerals' }); break;
      case '2': svgNumber.push({ svg: Two, type: 'numerals' }); break;
      case '3': svgNumber.push({ svg: Three, type: 'numerals' }); break;
      case '4': svgNumber.push({ svg: Four, type: 'numerals' }); break;
      case '5': svgNumber.push({ svg: Five, type: 'numerals' }); break;
      case '6': svgNumber.push({ svg: Six, type: 'numerals' }); break;
      case '7': svgNumber.push({ svg: Seven, type: 'numerals' }); break;
      case '8': svgNumber.push({ svg: Eight, type: 'numerals' }); break;
      case '9': svgNumber.push({ svg: Nine, type: 'numerals' }); break;
      case '.': svgNumber.push({ svg: Point, type: 'symbol' }); break;
      case ',': svgNumber.push({ svg: Comma, type: 'symbol' }); break;
      default: break;
    }
  }), this);;
  return svgNumber;
};

// 金钱格式化
const formatMoney = ({ value, type, fixed }) => {
  return minPlaces(value.toFixed(0)).replace(/(\d)(?=(\d{3})+$)/g, '$1,').toString();
};

// 翻牌器最小位数
const minPlaces = (number) => {
  const len = String(number).replace(/[\.\￥]/g, '').length;
  return len > 8 ? number : new Array(8 - len).fill(0).join('') + number;
};

// 所有的阿拉伯数字列表
const numberList =
  strToSvg('0123456789').map(({ svg, type }, index) =>
    <div key={index}>
      <img src={svg} />
    </div>
  );

class NumberCom extends React.Component {
  componentDidMount() {
    this.onChange();
  }

  componentDidUpdate(prevProps, prevState) {
    this.onChange();
  }

  render() {
    const prefixCls = 'eh-data-visualization-number';
    const { type, value, hideUnit = true } = this.props;
    const str = formatMoney({ ...this.props });
    const digitalArr = strToSvg(str);
    return (
      <div className={prefixCls} >
        <ul ref='numberList'>
          <li className={classNames('symbol', { hideMoney: type === 'number' })}>
            <img src={Money} />
          </li>
          {
            digitalArr.map(({ svg, type }, index) => {
              return (
                <li className={type} key={index}>
                  {type === 'symbol' ? <img src={svg} /> : numberList}
                </li>
              );
            })
          }
          <li className={classNames('symbol', { hideUnit })} >
            <img src={Unit} />
          </li>
        </ul>
      </div>
    );
  }

  onChange() {
    const { value } = this.props;
    const number = String(minPlaces(value));
    const ulEl = this.refs.numberList;
    const dom = ulEl.querySelector('li.numerals>div');
    const height = window.getComputedStyle(dom, null).height.match(/\d+.*\d+/)[0];

    Array.from(ulEl.querySelectorAll('li.numerals')).forEach((el, index) => {
      el.setAttribute("style", `transform: translateY(-${height * number.charAt(index)}px);`);
    });
  }
};

NumberCom.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(['money', 'number']).isRequired,
  hideUnit: PropTypes.bool
};

export default NumberCom;
