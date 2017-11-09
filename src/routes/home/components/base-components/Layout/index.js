import React, { Component } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);
const H = (window.innerHeight - 12 * 2 - 24 * 7) / 7;

const Layout = ({ conf }) => {
  const CONF = conf.slice();
  CONF.unshift([{ x: 0, y: 0, w: 7, h: 1 }]);
  return (
    <ReactGridLayout className="layouttest" rowHeight={H} margin={[24, 24]} cols={7}>
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
