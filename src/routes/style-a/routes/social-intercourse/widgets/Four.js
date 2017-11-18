import React, { Component } from 'react';
import { Widget, Title, CarouselTable } from 'components';
import callApi from 'api';
const columns = [
  { title: '活动标题', width: 'col-6', key: 'name' },
  { title: '标签', width: 'col-2', key: 'type' },
  { title: '发布时间', width: 'col-2', key: 'scale' },
  { title: '报名人数', width: 'col-2', key: 'adress' }
];

let DATA =
  [{ "adress": "金融基地-金融基地2栋-5F", "type": "光机电", "scale": "中型", "name": " 博尔科通讯系统（深圳）有限公司" },
  { "adress": "金融基地-金融基地2栋-6C", "type": "集成电路", "scale": "中型", "name": "上海东南融通科技有限公司" },
  { "adress": "科技工业大厦-科技大厦-西598", "type": "通信技术", "scale": "中型", "name": "上海印智信息科技有限公司" },
  { "adress": "科技工业大厦-科技大厦-东810", "type": "生物医药", "scale": "小型", "name": "上海印智软件股份有限公司" },
  { "adress": "科技工业大厦-科技大厦-东809", "type": "集成电路", "scale": "小型", "name": "上海奥莉生电子有限公司" },
  { "adress": "金融基地-1-11F", "type": "通信技术", "scale": "大型", "name": "上海神州数码有限公司深圳分公司" },
  { "adress": "科技工业大厦-科技大厦-西503", "type": "光机电", "scale": "大型", "name": "上海科箭软件科技有限公司" },
  { "adress": "金融基地-2-10C", "type": "商业-超市", "scale": "中型", "name": "上海联广认证有限公司深圳分公司" },
  { "adress": "科技工业园大厦-东802", "type": "软件", "scale": "中型", "name": "上海芯旺微电子技术有限公司" },
  { "adress": "科技工业园大厦-东808", "type": "集成电路", "scale": "大型", "name": "上海芯旺电子有限公司" },
  { "adress": "金融科技大厦-A-3C", "type": "商业-超市", "scale": "小型", "name": "上海赫丝蒂化妆品有限公司" },
  { "adress": "金融科技大厦-A-18C", "type": "生物医药", "scale": "大型", "name": "东吴证券股份有限公司" },
  { "adress": "金融科技大厦-裙楼-QL-1D", "type": "集成电路", "scale": "小型", "name": "中信证券股份有限公司深圳深南中路中信大厦证券营业部" },
  { "adress": "金融科技大厦-A-1D ", "type": "光机电", "scale": "大型", "name": "中信证券股份有限公司深圳科技园科苑路证券营业部" },
  { "adress": "普通办公厂房-老办公楼-办公楼-开发公司六层A", "type": "通信技术", "scale": "中型", "name": "中国人寿财产保险股份有限公司深圳市分公司" }, { "adress": "金融科技大厦-A-14C", "type": "软件", "scale": "小型", "name": "中国人民健康保险公司深圳分公司" }, { "adress": "金融基地-1-1A02", "type": "商业-超市", "scale": "中型", "name": "中国建设银行股份有限公司深圳市分行" }, { "adress": "金融基地-金融基地1栋-2A", "type": "生物医药", "scale": "中型", "name": "中国建设银行股份有限公司深圳科苑支行" }, { "adress": "金融科技大厦-A-1A", "type": "软件", "scale": "小型", "name": "中国银行股份有限公司深圳市分行" }, { "adress": "公寓与住宅-住宅34区-9栋-301", "type": "软件", "scale": "大型", "name": "中国长城计算机深圳股份有限公司" }, { "adress": "科技工业园大厦-西503", "type": "商业-超市", "scale": "小型", "name": "中正国际认证（深圳）有限公司" }, { "adress": "金融科技大厦-A-19A", "type": "商业-超市", "scale": "小型", "name": "中民保险经纪股份有限公司" }, { "adress": "金融科技大厦-A-19C", "type": "软件", "scale": "中型", "name": "中民电子商务股份有限公司" }, { "adress": "金融科技大厦-A-13A", "type": "商业-超市", "scale": "小型", "name": "丰益(上海)信息技术有限公司" }, { "adress": "金融科技大厦-主楼A部分-A-13A", "type": "软件", "scale": "小型", "name": "丰益（上海）信息技术有限公司" }, { "adress": "科技工业大厦-科技大厦-西01", "type": "软件", "scale": "小型", "name": "交通银行股份有限公司深圳分行" }, { "adress": "金融科技大厦-主楼A部分-A-5D01", "type": "通信技术", "scale": "小型", "name": "亿倍通（福建）实业有限公司" }, { "adress": "金融基地-金融基地1栋-4F3", "type": "生物医药", "scale": "大型", "name": "优泰科技（深圳）有限公司" }, { "adress": "金融科技大厦-A-18A", "type": "集成电路", "scale": "小型", "name": "前海东方金德资产管理有限公司" }, { "adress": "金融基地-1-4B", "type": "软件", "scale": "大型", "name": "北京三浦教育投资有限公司" }, { "adress": "金融基地-金融基地1栋-7D", "type": "商业-其他", "scale": "大型", "name": "北京中科泛华测控技术有限公司" }, { "adress": "金融基地-金融基地1栋-4B", "type": "商业-其他", "scale": "中型", "name": "北京升宇科技有限公司深圳分公司" }, { "adress": "金融基地-2-4A", "type": "商业-其他", "scale": "小型", "name": "北京恒昌德盛信用管理有限公司" }, { "adress": "金融科技大厦-A-4A", "type": "商业-其他", "scale": "大型", "name": "北京玖富时代投资顾问有限公司" }, { "adress": "生产力大楼-D-2层", "type": "软件", "scale": "大型", "name": "北京百度网讯科技有限公司深圳分公司" }, { "adress": "生产力大楼-D-1层", "type": "商业-其他", "scale": "小型", "name": "北京美餐巧达科技有限公司" }, { "adress": "金融基地-1-6F", "type": "商业-其他", "scale": "中型", "name": "北京银联金卡科技有限公司" }, { "adress": "金融基地-金融基地1栋-6E", "type": "商业-其他", "scale": "大型", "name": "北京银联金卡科技有限公司深圳分公司" }, { "adress": "金融科技大厦-A-24A02", "type": "生物医药", "scale": "中型", "name": "北京集创北方科技有限公司深圳办事处" }, { "adress": "金融科技大厦-主楼A部分-A-24A02", "type": "生物医药", "scale": "中型", "name": "北京集创北方科技股份有限公司" }, { "adress": "科技工业园大厦-西803", "type": "软件", "scale": "大型", "name": "华瑞昇电子(深圳）有限公司" }, { "adress": "科技工业大厦-科技大厦-西806", "type": "光机电", "scale": "中型", "name": "华瑞昇电子（深圳）有限公司" }, { "adress": "金融基地-2-2C", "type": "集成电路", "scale": "中型", "name": "华美优科网络技术（深圳）有限公司" }, { "adress": "金融基地-2-5F1", "type": "商业-其他", "scale": "大型", "name": "博尔科通讯系统（深圳）有限公司" }, { "adress": "生产力大楼-生产力大楼-B401", "type": "光机电", "scale": "小型", "name": "卡舒家电技术咨询（深圳）有限公司" }, { "adress": "生产力大楼-生产力大楼-C401", "type": "商业-超市", "scale": "小型", "name": "卡舒家电科技（深圳）有限公司" }, { "adress": "金融科技大厦-A-13C", "type": "商业-超市", "scale": "中型", "name": "同方(深圳)云计算技术股份有限公司" }, { "adress": "金融科技大厦-主楼A部分-A-13C", "type": "软件", "scale": "大型", "name": "同方（深圳）云计算技术股份有限公司" }, { "adress": "金融基地-1-7C", "type": "商业-其他", "scale": "小型", "name": "君丰创业投资基金管理有限公司" }, { "adress": "金融基地-1-3C1", "type": "商业-超市", "scale": "大型", "name": "和阳（深圳）投资管理有限公司" }, { "adress": "金融基地-金融基地1栋-10A", "type": "软件", "scale": "小型", "name": "国民技术股份有限公司" }, { "adress": "公寓与住宅-住宅34区-9栋-712", "type": "商业-其他", "scale": "小型", "name": "埃赛力达科技（深圳）有限公司" }, { "adress": "金融基地-2-7E", "type": "软件", "scale": "中型", "name": "塔塔信息技术(中国)股份有限公司深圳分公司" }, { "adress": "金融基地-金融基地2栋-7E", "type": "生物医药", "scale": "中型", "name": "塔塔信息技术（中国）股份有限公司深圳分公司" }, { "adress": "公寓与住宅-住宅34区-14栋-308", "type": "集成电路", "scale": "小型", "name": "天鼎公司-顾小山" }, { "adress": "金融基地-1-6A ", "type": "集成电路", "scale": "小型", "name": "太平人寿保险有限公司深圳分公司" }, { "adress": "金融基地-金融基地1栋-3D", "type": "商业-其他", "scale": "中型", "name": "奇异牛科技(深圳)有限公司" }, { "adress": "金融基地-1-2D", "type": "生物医药", "scale": "中型", "name": "安信证券股份有限公司深圳科发路证券营业部" }, { "adress": "金融基地-1-6C", "type": "软件", "scale": "小型", "name": "安富利物流(深圳)有限公司" }, { "adress": "金融基地-金融基地1栋-6C", "type": "通信技术", "scale": "大型", "name": "安富利电子科技（深圳）有限公司" }, { "adress": "金融基地-金融基地2栋-7A", "type": "通信技术", "scale": "小型", "name": "安捷伦科技（中国）有限公司深圳分公司" }, { "adress": "金融基地-2-5E", "type": "集成电路", "scale": "小型", "name": "安霸半导体技术(上海)有限公司" }, { "adress": "金融基地-金融基地2栋-6E", "type": "软件", "scale": "小型", "name": "安霸半导体技术（上海）有限公司深圳分公司" }];

class Four extends Component {
  constructor(props) {
    super(props);
    // this.state = { data: [] };
  }

  componentDidMount() {
    // callApi({
    //   api: 'companyespon',
    //   success: (response) => {
    //     this.setState({ data: response });
    //     console.log(response);
    //   }
    // });
  }

  render() {
    return (
      <Widget className="four" >
        <Title value="最新发布" />
        <div className='content'>
          <CarouselTable columns={columns} data={DATA} />
        </div>
      </Widget>
    );
  }
}

export default Four;
