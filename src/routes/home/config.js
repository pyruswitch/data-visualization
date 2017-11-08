// （屏幕高度 - （上下margin60 - 模块间距12）*2 - 模块间距*7)/7
const height = (window.innerHeight - 48 * 2 - 24 * 7) / 7;
const fill = '#7D98EA';
const margin = [10, 20, 30, 50];
const stroke = "#5f79c5";
export default {
  // 统一高度，根据UI稿子计算，如果第一行公式没看懂，请联系Aha
  height,
  // 默认的统一边距
  margin,
  // title默认样式
  title: {
    fontSize: '8',
    textAlign: 'center',
    fill,
  },
  // label默认样式
  labels: {
    autoRotate: false,
    label: {
      textAlign: 'center',
      fill,
      fontSize: '8',
    }
  },
  // 图例默认样式
  legend: {
    title: null,
    unChecked: '#CCC',
    wordSpaceing: 2,
    itemWrap: false,
    word: {
      fill: '#999',
      fontSize: 8
    }
  },
  // 设置坐标轴线的样式
  line: {
    lineWidth: 1, // 设置线的宽度
    stroke //  设置线的颜色
  },

};
