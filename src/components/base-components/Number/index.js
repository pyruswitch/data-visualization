import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Number, { icons } from './style';
import Bg from './bg.svg';
import classNames from 'classnames';
import styled from 'styled-components';
import person from './StyleB/person.svg';
import './index.less';
console.log(icons);

// 金钱格式化
const formatMoney = ({ value, type, fixed }) => {
  return minPlaces(value.toFixed(0)).replace(/(\d)(?=(\d{3})+$)/g, '$1,').toString();
};

// 翻牌器最小位数
const minPlaces = (number) => {
  const len = String(number).replace(/[\.\￥]/g, '').length;
  return len > 8 ? number : new Array(8 - len).fill(0).join('') + number;
};

class NumberCom extends React.Component {
  componentWillMount() {
    // 所有的阿拉伯数字列表
    const Div = this.props.style === 'A' ?
      styled.div`
    background-size: 100% 100%;
    background-image: url('${Bg}');
    background-repeat: no-repeat;`: styled.div``;
    this.numberList =
      this.strToSvg('0123456789').map(({ svg, type }, index) =>
        <Div key={index}>
          <img src={svg} />
        </Div>
      );
  }

  componentDidUpdate(prevProps, prevState) {
    this.onChange();
  }

  componentDidMount() {
    this.onChange();
  }

  // 字符串转成对应的svg
  strToSvg(number) {
    const style = this.props.style;
    let svgNumber = [];
    number.toString().split("").forEach((symbol => {
      switch (symbol) {
        case '0': svgNumber.push({ svg: Number[style][0], type: 'numerals' }); break;
        case '1': svgNumber.push({ svg: Number[style][1], type: 'numerals' }); break;
        case '2': svgNumber.push({ svg: Number[style][2], type: 'numerals' }); break;
        case '3': svgNumber.push({ svg: Number[style][3], type: 'numerals' }); break;
        case '4': svgNumber.push({ svg: Number[style][4], type: 'numerals' }); break;
        case '5': svgNumber.push({ svg: Number[style][5], type: 'numerals' }); break;
        case '6': svgNumber.push({ svg: Number[style][6], type: 'numerals' }); break;
        case '7': svgNumber.push({ svg: Number[style][7], type: 'numerals' }); break;
        case '8': svgNumber.push({ svg: Number[style][8], type: 'numerals' }); break;
        case '9': svgNumber.push({ svg: Number[style][9], type: 'numerals' }); break;
        case '.': svgNumber.push({ svg: Number[style][10], type: 'symbol' }); break;
        case ',': svgNumber.push({ svg: Number[style][11], type: 'symbol' }); break;
        default: break;
      }
    }), this);;
    return svgNumber;
  }

  render() {
    const prefixCls = 'com-number';
    const { type, value, hideUnit = true, style, icon } = this.props;
    const str = formatMoney({ ...this.props });
    const digitalArr = this.strToSvg(str);

    return (
      <div className={prefixCls} >
        <ul ref='numberList'>
          {
            icon &&
            <li className='numerals' >
              <div>
                <img src={icons[icon]} />
              </div>
            </li>
          }
          <li className={classNames('money', { hideMoney: type === 'number' })}>
            <div><img src={Number[style][12]} /></div>
          </li>
          {
            digitalArr.map(({ svg, type }, index) => {
              return (
                <li className={type} key={index}>
                  {
                    type === 'symbol' ?
                      <div> <img src={svg} /></div> :
                      this.numberList
                  }
                </li>
              );
            })
          }
          <li className={classNames('symbol', 'unit', { hideUnit })} >
            <img src={Number[style][13]} />
          </li>
        </ul>
      </div>
    );
  }

  onChange() {
    try {
      const { value } = this.props;
      const number = String(minPlaces(value));
      const ulEl = this.refs.numberList;
      const dom = ulEl.querySelector('li.numerals>div');

      const height = window.getComputedStyle(dom, null).height.match(/\d+.*\d+/)[0];

      Array.from(ulEl.querySelectorAll('li.numerals')).forEach((el, index) => {
        el.setAttribute("style", `transform: translateY(-${height * number.charAt(index)}px);`);
      });
    } catch (error) {
      console.log(error)
    }
  }
};

NumberCom.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(['money', 'number']).isRequired,
  hideUnit: PropTypes.bool,
  icon: PropTypes.string
};

NumberCom.defaultProps = {
  style: "B"
}

export default NumberCom;
