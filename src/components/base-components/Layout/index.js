import React, { Component } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import config from 'config';

const ReactGridLayout = WidthProvider(RGL);


const Layout = ({ conf }) => {
  const CONF = conf.slice();
  CONF.unshift([{ x: 0, y: 0, w: 24, h: 3 }]);
  return (
    <ReactGridLayout className="layouttest" rowHeight={config.size[1]} margin={[24, 24]} cols={24}>
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
