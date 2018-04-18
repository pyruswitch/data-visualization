// 框架
import React from 'react';
// 静态资源
import Chrome from 'images/support/chrome.png';
import _360 from 'images/support/360.png';
import Firefox from 'images/support/firefox.png';
import IE from 'images/support/ie.png';
import warning from 'images/support/warning.png';
import './index.less';
const downloads = [{
  name: 'Chrome(推荐)',
  url: 'http://down04994539.cdnxiazai.com/cx/160624/16/GoogleChrome%E6%B5%8F%E8%A7%88%E5%99%A8@19_327560.exe',
  img: Chrome
}, {
  name: 'Firefox',
  url: 'http://download.firefox.com.cn/releases-sha2/stub/official/zh-CN/Firefox-latest.exe',
  img: Firefox
}, {
  name: '360浏览器',
  url: 'http://down.360safe.com/se/360se8.1.1.406.exe',
  img: _360
}, {
  name: 'IE10及以上',
  url: 'https://download.microsoft.com/download/9/2/F/92FC119C-3BCD-476C-B425-038A39625558/IE11-Windows6.1-x86-en-us.exe',
  img: IE
}];
export default () => {
  const prefixCls = 'ehome-support';
  return (
    <div className={prefixCls}>
      <div>
        <h1>
          <img src={warning} alt="warning" />
          <span>浏览器版本太低！</span>
        </h1>
        <span className={`${prefixCls}-support`}>
          深感抱歉！我们暂时支持不了你的浏览器，为了更好的体验我们的产品，推荐使用以下浏览器！
                </span>
        <ul>
          {
            downloads.map(({ name, url, img }, index) => (
              <li key={index}>
                <a href={url}>
                  <img src={img} alt={name} />
                  <span>{name}</span>
                </a>
              </li>
            ))
          }
        </ul>
        <footer>
          <span>
            感谢您的使用
          </span>
        </footer>
      </div>
    </div >
  );
};
