import React, { Component } from 'react';
import createG2 from 'g2-react';
import G2, { Stat } from 'g2';
import config from 'routes/home/config';
const { height, title, labels, line } = config;
const createHistogram = (colX = {}, colY = {}) => createG2(chart => {
  chart.col('name', {
    type: 'cat',
    formatter: colX.fotmatter
  });

  chart.axis('value', {
    titleOffset: 30,
    grid: null,
    tickLine: null,
    position: 'top',
    title,
    labels,
    line
  });
  chart.tooltip(false);
  chart.axis('name', {
    tickLine: null,
    title: null,
    labels,
    line
  });

  chart.legend(false);
  chart.col('value', {
    type: colY.type,
    alias: colY.alias,
    formatter: colY.formatter
  });
  chart.interval().position('name*value').color('name');
  chart.render();
});

export default ({ colX, colY, ...rest }) => {
  const histogramProps = Object.assign({}, {
    forceFit: true,
    height: height * 2,
    width: 400,
    plotCfg: { margin: [10, 20, 30, 50] }
  }, rest);
  const Histogram = createHistogram(colX, colY);
  return (
    <Histogram {...histogramProps} />
  );
};
