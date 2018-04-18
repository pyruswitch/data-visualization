import React, { Component } from 'react';
import createG2 from 'g2-react';
import G2, { Stat } from 'g2';
import config from 'routes/home/config';
const { height, labels } = config;

const RadarChart = createG2(chart => {
  chart.col('value', {
    type: 'pow',
    formatter: () => null
  });
  chart.coord('polar');
  chart.legend(false);
  chart.axis('categories', { // 设置坐标系栅格样式
    line: null,
    labels,
    grid: null,
    labelOffset: 8,
  });
  chart.axis('value', {

    tickLine: null,
    line: null,
    grid: {
      line: null,
      even: {
        fill: '#ccc',
        opacity: 0.1
      },
    }
  });
  chart.areaStack().position('categories*value').color('name', ['#5EE2FF']);
  chart.render();
});

export default (props) => {
  const chartProps = Object.assign({}, {
    height: height * 2 - 20,
    width: 500,
    forceFit: true,
    plotCfg: { margin: [20, 0, 20, 0] }
  }, props);

  return (<RadarChart {...chartProps} />);
};
