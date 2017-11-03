// （屏幕高度 - （上下margin60 - 模块间距12）*2 - 模块间距*7)/7
const height = (window.innerHeight - 48 * 2 - 24 * 7) / 7;
const fill = '#7D98EA';
const margin = [10, 20, 30, 50];
const stroke = "#5f79c5";
export default {
  height,
  margin,
  title: {
    fontSize: '8',
    textAlign: 'center',
    fill,
  },
  labels: {
    autoRotate: false,
    label: {
      textAlign: 'center',
      fill,
      fontSize: '8',
    }
  },
  // 设置坐标轴线的样式，如果值为 null，则不显示坐标轴线 图形属性
  line: {
    lineWidth: 1, // 设置线的宽度
    stroke //  设置线的颜色
  },

};
