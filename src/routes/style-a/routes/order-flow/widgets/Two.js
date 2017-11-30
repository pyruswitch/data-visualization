import React, { Component } from 'react';
import { Widget, Title, NumberCard, CarouselTable } from 'components';
import callApi from 'api';
const columns = [
  { title: '企业名称', width: 'col-6', key: 'name' },
  { title: '行业类别', width: 'col-2', key: 'type' },
  { title: '企业规模', width: 'col-2', key: 'scale' },
  { title: '入驻门牌', width: 'col-2', key: 'adress' }
];

let DATA =
  [
    { adress: "21#楼3层", type: "制造", scale: "中型", name: "嘉兴维娃斯贸易有限公司" },
    { adress: "21-203-4、203-5", type: "投资管理", scale: "中型", name: "嘉兴市牧子投资管理有限公司" },
    { adress: "21-203-1、203-2、203-3", type: "文化传媒", scale: "大型", name: "浙江九承文化艺术有限公司" },
    { adress: "21#103-2", type: "电子商务", scale: "中型", name: "嘉兴麓茜电子商务有限公司" },
    { adress: "21-101、102", type: "新能源", scale: "中型", name: "浙江嘉阳新能源有限公司" },
    { adress: "21幢2层201、202", type: "服装制造", scale: "小型", name: "嘉兴珍妮纺织品有限公司" },
    { adress: "22#楼B1-2层、5层部分", type: "新能源", scale: "大型", name: "浙江电腾云光伏科技有限公司" },
    { adress: "B22#楼513", type: "新能源", scale: "大型", name: "嘉兴国电通新能源科技有限公司" },
    { adress: "B22#楼4层", type: "高新技术", scale: "大型", name: "长三角（嘉兴）纳米科技产业发展研究院" },
    { adress: "B22#楼305-4", type: "服装制造", scale: "中型", name: "嘉兴天隽服饰有限公司" },
    { adress: "B22#楼305-3", type: "新能源", scale: "中型", name: "嘉兴市天坤服饰有限公司" },
    { adress: "B22#楼305-2", type: "对外贸易", scale: "小型", name: "浙江智诚新能源科技有限公司" },
    { adress: "B22*305-1", type: "对外贸易", scale: "中型", name: "嘉兴龙源贸易有限公司" },
    { adress: "B22#楼304", type: "高新技术", scale: "中型", name: "佛山市建准电子有限公司" },
    { adress: "B22#楼301.302.303-1", type: "文化传媒", scale: "大型", name: "浙江华怡文化发展有限公司" },
    { adress: "22#楼512-2", type: "工业建筑", scale: "小型", name: "嘉兴市宏禹水利设施维护有限公司" },
    { adress: "43#楼202-2", type: "对外贸易", scale: "中型", name: "嘉兴维娃斯贸易有限公司" },
    { adress: "43#楼201-1-3", type: "高新技术", scale: "中型", name: "深圳市卓异科技有限公司" },
    { adress: "43#楼201-1-2", type: "机械制造", scale: "中型", name: "嘉兴汇新机械科技有限公司" },
    { adress: "43#楼201-1-1", type: "对外贸易", scale: "中型", name: "嘉兴旺坤商贸有限公司" },
    { adress: "43#楼201", type: "服装制造", scale: "中型", name: "上海象王服饰有限公司" },
    { adress: "43#楼103-3", type: "文化传媒", scale: "中型", name: "嘉兴彩笺摄影服务有限公司" },
    { adress: "43#楼103-2", type: "文化传媒", scale: "中型", name: "嘉兴市龙韵文化传播有限公司" },
    { adress: "43#楼103-1", type: "电子商务", scale: "中型", name: "嘉兴米泥磨电子商务有限公司" },
    { adress: "43#楼101", type: "新能源", scale: "中型", name: "浙江晶科光伏科技有限公司" },
    { adress: "43#楼102", type: "餐饮服务", scale: "小型", name: "嘉兴市捌玖仟餐饮管理有限公司" }
  ];

class Two extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <Widget>
        <Title value={title} />
        <div className="widget-content">
          <CarouselTable columns={columns} data={DATA} />
        </div>
      </Widget>
    );
  }
}

export default Two;
