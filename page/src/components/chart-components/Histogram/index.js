import React, { Component } from 'react';
import createG2 from 'g2-react';
import G2, { Stat } from 'g2';
import config from 'config';
const { height, title, labels, line, legend } = config;

const createHistogram = ({
  // 是否有图例，默认没有
  hasLegend = false,
  // 是否没有Title，默认有
  noTitle = false,
  // X轴配置
  colX = {},
  // Y轴配置
  colY = {},
  // 是否反向，默认false
  transpose = false
}) => createG2(chart => {
    chart.col('name', colX);

    chart.axis('value', {
      titleOffset: 50,
      grid: null,
      tickLine: null,
      position: 'top',
      title: noTitle ? null : title,
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
    if (hasLegend === true)
      chart.legend(Object.assign({}, legend, {
        position: 'bottom',
        spacingX: 20
      }));
    else
      chart.legend(false);

    chart.col('value', colY);
    if (transpose === true) {
      chart.coord('rect').transpose();
      chart.intervalDodge().position('name*value').color('type').size('name', function () {
        if (this.scales.length && this.scales[0].values.length <= 6) {
          const clientWidth = document.body.clientWidth;
          return 40 * clientWidth / 1366;
        }
      });
    } else {
      chart.interval().position('name*value').color('name').size('name', function () {
        if (this.scales.length && this.scales[0].values.length <= 6) {
          const clientWidth = document.body.clientWidth;
          return 40 * clientWidth / 1366;
        }
      })
    }
    chart.render();
  });

export default ({ colX, colY, hasLegend, transpose, noTitle, ...rest }) => {
  const histogramProps = Object.assign({}, {
    forceFit: true,
    height: height * 2,
    width: 400,
    plotCfg: { margin: [10, 20, 30, 60] }
  }, rest);
  const Histogram = createHistogram({ colX, colY, transpose, noTitle, hasLegend });
  return (
    <Histogram {...histogramProps} />
  );
};
