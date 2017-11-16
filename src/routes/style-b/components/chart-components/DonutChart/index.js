import React, { Component } from 'react';
import createG2 from 'g2-react';
import G2, { Stat } from 'g2';
import config from 'routes/home/config';
const { height, legend } = config;
/**
 * 空心圆环图
 * @param {inner,innerHTML,colors}
 * inner<Number>: 内圆的大小，最大为1，默认0.8
 * innerHTML<HTMLString>: 圆环内的文字，需要自己定义css
 */

const createDonutChart = ({ innerHTML, colors = ['#E92C81', '#36B3C3', '#B3B6B7', '#FAD200', '#6859EA', '#0B78E3', '#5DADE2', '#76D7C4'], inner = 0.5 }) => createG2(chart => {
  var Stat = G2.Stat;
  chart.coord('theta', {
    radius: 0.8,
    inner
  });
  chart.legend(Object.assign({}, legend, {
    itemWrap: true,
    formatter: function (val) {
      const { data } = chart._attrs.data;
      for (var i = 0, len = data.length; i < len; i++) {
        var obj = data[i];
        if (obj.name === val) {
          return val + ': ' + obj.value + '%';
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
    node.innerHTML = innerHTML;
    canvasDom.parentNode.appendChild(node);
  }
});


export default ({ colors, inner, innerHTML, ...rest }) => {
  const chartProps = Object.assign({}, {
    height: height * 2 - 24,
    width: 600,
    forceFit: true,
    plotCfg: { margin: [0, 150, 0, 0] }
  }, rest);
  const DonutChart = createDonutChart({ colors, inner, innerHTML });
  return (<DonutChart {...chartProps} />);
};
