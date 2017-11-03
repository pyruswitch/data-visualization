import React, { Component } from 'react';
import createG2 from 'g2-react';
import G2, { Stat } from 'g2';
import config from 'routes/home/config';
const { height } = config;
/**
 * 空心圆环图
 * @param {inner,innerHTML,colors,showLabel}
 * inner<Number>: 内圆的大小，最大为1，默认0.8
 * innerHTML<HTMLString>: 圆环内的文字，需要自己定义css
 * showLabel<Bool>: 是否显示label，默认显示
 */

const createDonutChart = ({ innerHTML, colors = ['#E92C81', '#36B3C3', '#B3B6B7', '#FAD200', '#6859EA', '#0B78E3', '#5DADE2', '#76D7C4'], showLabel = true, inner = 0.5 }) => createG2(chart => {
  var Stat = G2.Stat;
  chart.coord('theta', {
    radius: 0.8,
    inner
  });
  chart.legend(false);
  chart.tooltip(false);
  const conf = chart.intervalStack()
    .position(Stat.summary.percent('value'))
    .color('name', colors);
  if (showLabel)
    conf.label('name*..percent', {
      offset: 3,
      labelLine: false,
      label: {
        fontSize: 8
      },
      custom: true,
      renderer: function (text, item, index) {
        let point = item.point;
        let percent = (point['..percent'] * 100).toFixed(2) + '%';
        return `
        <p style="
          text-align: center;
          display: inline-block;
          font-size: 12px;
          -webkit-transform: scale(0.64);
          transform: scale(0.64);
          position: relative;
          white-space:nowrap;
          width: 120%;
          left: -12%;
          color:${point.color}"
        >${text} ${percent}</p>`;
      }
    });
  chart.render();
  if (typeof innerHTML === 'string') {
    var canvasDom = chart.get('frontCanvas').get('el');
    var node = document.createElement('div');
    node.innerHTML = innerHTML;
    canvasDom.parentNode.appendChild(node);
  }
});


export default ({ showLabel, colors, inner, innerHTML, ...rest }) => {
  const chartProps = Object.assign({}, {
    height: height * 2 - 24,
    width: 500,
    forceFit: true,
    plotCfg: { margin: [0, 0, 0, 0] }
  }, rest);
  const DonutChart = createDonutChart({ showLabel, colors, inner, innerHTML });
  return (<DonutChart {...chartProps} />);
};
