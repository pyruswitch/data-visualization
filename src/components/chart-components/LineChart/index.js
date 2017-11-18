import React from 'react';
import createG2 from 'g2-react';
import G2, { Stat, Frame } from 'g2';
import config from 'config';
const { height, title, labels, line, margin } = config;
const createLineChart = ({ colX, colY }) => createG2(chart => {
  chart.legend(false);
  chart.tooltip(false);
  chart.axis('name', {
    title: null,
    tickLine: null,
    labels,
    line

  });
  chart.axis('value', {
    title: null,
    titleOffset: 30,
    tickLine: null,
    position: 'top',
    labels,
    line: null,
    grid: {
      type: 'polygon',
      line: {
        stroke: 'rgba(255,255,255,0.10)',
        lineWidth: 1,
        lineDash: [8, 8]
      }
    }
  });
  chart.guide().text(['01月', '280'], '新增人数', {
    fill: '#fff',
    textAlign: 'left',
    fontSize: 12
  });
  chart.col('name', {
    formatter: colX.formatter,
    range: [0, 1]
  });

  // chart.line().position('name*value').color('type');
  chart.line().style({
    stroke: '#1DE9B6',
    lineWidth: 4,
    fill: null
  }).position('name*value').color('type');
  chart.point().position('name*value').color('#F9CF50').size(5).shape('circle');
  //初始化到最新一个点
  var lastPoint = chart.get('plotRange').br;
  chart.showTooltip(lastPoint);
  //鼠标点击事件
  chart.on('plotclick', function (ev) {
    var point = {
      x: ev.x,
      y: ev.y
    };
    chart.showTooltip(point); // 接收的是画布坐标上的点
  });
  chart.render();
});

export default ({ plotCfg, colX, colY, ...rest }) => {
  const chartProps = Object.assign({}, {
    height: height * 2,
    width: 500,
    forceFit: true,
    plotCfg: { margin }
  }, rest);
  const LineChart = createLineChart({ colX, colY });
  return (<LineChart {...chartProps} />);
};

