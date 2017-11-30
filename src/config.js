// （屏幕高度 - （上下margin60 - 模块间距12）*2 - 模块间距*7)/7，这个数值算错了
const height = (window.innerHeight - 48 * 2 - 24 * 7) / 7;
// 栅格每块的高度
const H = (window.innerHeight - 12 * 2 - 24 * 24) / 24;
// 栅格每块的宽度
const W = (window.innerWidth - 12 * 2 - 24 * 24) / 24;
const fill = '#fff';
const margin = [50, 50, 50, 60];
const stroke = "rgba(255,255,255,0.10)";
const size = [W, H];
const widgetSize = (w, h) => [(w - 1) * 24 + w * W, (h - 1) * 24 + h * H];
export default {
  size,
  // 统一高度，根据UI稿子计算，如果第一行公式没看懂，请联系Aha
  height,
  // 默认的统一边距
  margin,
  // title默认样式
  title: {
    fontSize: '12',
    textAlign: 'center',
    fill,
  },
  // label默认样式
  labels: {
    autoRotate: false,
    label: {
      textAlign: 'center',
      fill,
      fontSize: '12',
    }
  },
  // 图例默认样式
  legend: {
    title: null,
    unChecked: '#CCC',
    wordSpaceing: 2,
    itemWrap: false,
    word: {
      fill: 'rgba(255,255,255,0.75)',
      fontSize: 12
    },
    spacingY: 4
  },
  // 设置坐标轴线的样式
  line: {
    lineWidth: 1, // 设置线的宽度
    stroke //  设置线的颜色
  },
};
export { widgetSize };
