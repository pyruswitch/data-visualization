import React, { Component } from 'react';
import createG2 from 'g2-react';
import G2, { Stat } from 'g2';
import config from 'config';
const { height, legend, margin } = config;
import './index.less';
/**
 * 空心圆环图
 * @param {inner,innerHTML,colors}
 * inner<Number>: 内圆的大小，最大为1，默认0.8
 * innerHTML<HTMLString>: 圆环内的文字，需要自己定义css
 */

const createPieChart = ({ innerHTML, colors = ['#935DFA', '#F9CF50', '#22E756', '#E92C81', '#36B3C3', '#B3B6B7', '#FAD200', '#6859EA', '#0B78E3', '#5DADE2', '#76D7C4'], inner = 0.5 }) => createG2(chart => {
  var Stat = G2.Stat;
  if (typeof innerHTML === 'string') {
    chart.coord('theta', {
      radius: 0.8,
      inner
    });
  } else {
    chart.coord('theta');
  }
  chart.legend(Object.assign({}, legend, {
    itemWrap: true,
    formatter: function (val) {
      const { data } = chart._attrs.data;
      let total = 0;
      data.forEach(e => {
        total += e.value;
      });
      for (var i = 0, len = data.length; i < len; i++) {
        var obj = data[i];
        if (obj.name === val) {
          return val + ': ' + (obj.value / total * 100).toFixed(0) + '%';
        }
      }
    }
  }));
  const conf = chart.intervalStack()
    .position(Stat.summary.percent('value'))
    .color('name', colors);
  chart.render();
  if (typeof innerHTML === 'string') {
    var canvasDom = chart.get('frontCanvas').get('el');
    var node = document.createElement('div');
    node.innerHTML = `<div class='pie-innerHtml'><div>${innerHTML}</div></div>`;
    canvasDom.parentNode.appendChild(node);
  } else {
    // 设置默认选中
    var geom = chart.getGeoms()[0]; // 获取所有的图形
    var items = geom.getData(); // 获取图形对应的数据
    // 超过三项时不默认选中，因为此时选中状态不好看，chart.data没获取到数据
    if (chart._attrs.data.data.length < 4)
      geom.setSelected(items[1]); // 设置选中
  }
});


export default ({ height = config.height * 2 - 24, colors, inner, innerHTML, ...rest }) => {
  const chartProps = Object.assign({}, {
    height,
    width: 600,
    forceFit: true,
    plotCfg: { margin: [10, 100, 10, 0] }
  }, rest);
  const PieChart = createPieChart({ colors, inner, innerHTML });
  return (<PieChart {...chartProps} />);
};
