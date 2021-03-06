import React, { Component } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);
const H = (window.innerHeight - 12 * 2 - 24 * 24) / 24;

const Layout = ({ conf }) => {
  const CONF = conf.slice();
  CONF.unshift([{ x: 0, y: 0, w: 24, h: 3 }]);
  return (
    <ReactGridLayout className="layouttest" rowHeight={H} margin={[24, 24]} cols={24}>
      {
        conf.map((arr, index) => {
          const data = Object.assign({ static: true }, arr[0]);
          return (
            <div key={index} data-grid={data}>
              {arr[1]}
            </div>
          );
        })
      }
    </ReactGridLayout>
  );
};


export default Layout;
