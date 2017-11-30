import React, { Component } from 'react';
import createG2 from 'g2-react';
import G2, { Stat } from 'g2';
import config from 'config';
const { height, labels, title, line, legend } = config;

const createStackedBarChart = ({ colX, colY }) => createG2(chart => {
  var Stat = G2.Stat;
  chart.axis('name', {
    title: null,
    tickLine: null,
    labels,
    line
  });
  chart.tooltip(false);
  chart.axis('value', {
    grid: null,
    titleOffset: 30,
    tickLine: null,
    position: 'top',
    title,
    labels,
    line
  });
  chart.legend(legend);
  chart.col('value', {
    alias: colY.alias
    // type: 'log'
  });
  chart.legend('status', {
    title: null
  });
  chart
    .intervalStack()
    .position('name*value')
    .color('status', ['#FAD200 ', '#E90081', '#56B3BB'])
    .shape('borderRadius')
    .size('name', function () {
      if (this.scales.length && this.scales[0].values.length <= 6) {
        const clientWidth = document.body.clientWidth;
        return 40 * clientWidth / 1366;
      }
    });
  chart.render();
});

export default ({ colX = {}, colY = {}, ...props }) => {
  const chartProps = Object.assign({}, {
    height: height * 2,
    width: 500,
    forceFit: true,
    plotCfg: { margin: [10, 70, 30, 50] }
  }, props);
  const StackedBarChart = createStackedBarChart({ colX, colY });

  return <StackedBarChart {...chartProps} />;
};
