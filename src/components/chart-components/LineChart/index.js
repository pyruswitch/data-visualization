import React from 'react';
import createG2 from 'g2-react';
import G2, { Stat, Frame } from 'g2';
import config from 'config';
const { height, title, labels, line, margin } = config;
const createLineChart = ({ colX, colY }) => createG2(chart => {
  chart.legend(false);
  chart.axis('name', {
    title: null,
    tickLine: null,
    labels,
    line
  });
  chart.tooltip(false);
  chart.axis('value', {
    title: null,
    grid: null,
    titleOffset: 30,
    tickLine: null,
    position: 'top',
    title,
    labels,
    line
  });
  chart.col('name', {
    formatter: colX.formatter,
    range: [0, 1]
  });
  // chart.line().position('name*value').color('type');
  chart.line().position('name*value').color('type');
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

