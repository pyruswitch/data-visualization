import React, { Component } from 'react';
import createG2 from 'g2-react';
import G2, { Stat } from 'g2';
import config from 'config';
const { height, labels, title, line, legend } = config;
const BASEHIGHT = (window.innerHeight - 48 * 2 - 24 * 7) / 7;

const Frame = G2.Frame;
const createStackedBarChart = ({ colX, colY }) => createG2(chart => {
  chart.col('month', {
    // type: 'time',
    labels,
    line
  });
  chart.col('value', Object.assign(colY, {
    type: 'linear',
    min: 0,
    nice: true
  }));

  // chart.col('totalArea', {
  //   min: 0,
  //   max: 18,
  //   nice: false,
  //   alias: '总面积'
  // });

  chart.axis('value', {
    title,
    labels,
    line
  });

  chart.axis('month', {
    labels,
    line,
    title: null,
    tickLine: null,
  });

  // chart.tooltip(false);

  chart.areaStack().position('month*value').color('type', ['#d8d8ff', '#6060ff'])
    .opacity(0.8).shape('smooth');
  // chart.line().position(Stat.summary.percent('month*totalArea')).size(2).color('#000').shape('smooth');
  chart.legend('type', false);
  chart.render();
});

export default ({ colX = {}, colY = {}, ...props }) => {
  const chartProps = Object.assign({}, {
    height: BASEHIGHT * 4,
    width: 500,
    forceFit: true,
    plotCfg: { margin: [50, 150, 150, 80] }
  }, props);
  const StackedAreaGraph = createStackedBarChart({ colX, colY });
  return (<StackedAreaGraph {...chartProps} />);
};
