import React, { Component } from 'react';
import createG2 from 'g2-react';
import G2, { Stat } from 'g2';
import config from 'routes/home/config';
const { height, labels, title, line } = config;

const StackedBarChart = createG2(chart => {
  var Stat = G2.Stat;
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
  chart.legend({
    title: null,
    unChecked: '#CCC',
    wordSpaceing: 2,
    itemWrap: false,
    word: {
      fill: '#999',
      fontSize: 8
    }
  });
  chart.col('value', {
    // type: 'log'
  });
  chart.legend('status', {
    title: null
  });
  chart.intervalStack().position('name*value').color('status', ['#FAD200 ', '#E90081', '#56B3BB']).size(9);
  chart.render();
});

export default (props) => {
  const chartProps = Object.assign({}, {
    height: height * 2,
    width: 500,
    forceFit: true,
    plotCfg: { margin: [10, 70, 30, 50] }
  }, props);

  return (<StackedBarChart {...chartProps} />);
};
