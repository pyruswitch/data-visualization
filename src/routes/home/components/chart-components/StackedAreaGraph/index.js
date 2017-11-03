import React, { Component } from 'react';
import createG2 from 'g2-react';
import G2, { Stat } from 'g2';
const BASEHIGHT = (window.innerHeight - 48 * 2 - 24 * 7) / 7;

const StackedAreaGraph = createG2(chart => {
  chart.col('name', {
    type: 'cat',
    tickInterval: 25
  });
  chart.areaStack().position('name*value').color('country');
  chart.render();
});

export default (props) => {
  const chartProps = Object.assign({}, {
    height: BASEHIGHT * 4 - 24,
    width: 500,
    forceFit: true,
    plotCfg: { margin: [50, 150, 150, 80] }
  }, props);

  return (<StackedAreaGraph {...chartProps} />);
};
