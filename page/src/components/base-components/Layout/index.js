import React, { Component } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import { Header } from 'components';
import config from 'config';
import './index.less';

const ReactGridLayout = WidthProvider(RGL);


const Layout = ({ conf }) => {
  const CONF = [
    ...conf.slice()
  ];
  return (
    <ReactGridLayout className="com-layout" rowHeight={config.size[1]} margin={[24, 24]} cols={24}>
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
