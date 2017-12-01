import React, { Component } from 'react';
import { Modal } from 'antd';
import { Widget, Layout } from 'components';
import RGL, { WidthProvider } from 'react-grid-layout';
import { Three, Five, Two, One, Four } from './widgets';
import callApi from 'api';
import { widgetSize } from 'config';
import './index.less';
const ReactGridLayout = WidthProvider(RGL);
const WATER = [
  { name: '嘉兴维娃斯贸易有限公司', value: 140 },
  { name: '嘉兴市牧子投资管理有限公司', value: 220 },
  { name: '浙江九承文化艺术有限公司', value: 130 },
  { name: '嘉兴麓茜电子商务有限公司', value: 326 },
  { name: '浙江嘉阳新能源有限公司', value: 240 },
  { name: '嘉兴珍妮纺织品有限公司', value: 1071 },
  { name: '嘉兴市宏禹水利设施维护有限公司', value: 678 },
  { name: '深圳市卓异科技有限公司', value: 341 },
  { name: '嘉兴汇新机械科技有限公司', value: 271 },
  { name: '嘉兴旺坤商贸有限公司', value: 177 },
  { name: '上海象王服饰有限公司', value: 690 },
  { name: '嘉兴彩笺摄影服务有限公司', value: 79 },
  { name: '浙江晶科光伏科技有限公司', value: 110 },
  { name: '嘉兴市捌玖仟餐饮管理有限公司', value: 3090 }
];
const ELE = [
  { name: '嘉兴维娃斯贸易有限公司', value: 1401 },
  { name: '嘉兴市牧子投资管理有限公司', value: 2220 },
  { name: '浙江九承文化艺术有限公司', value: 1430 },
  { name: '嘉兴麓茜电子商务有限公司', value: 3526 },
  { name: '浙江嘉阳新能源有限公司', value: 2440 },
  { name: '嘉兴珍妮纺织品有限公司', value: 3641 },
  { name: '嘉兴市宏禹水利设施维护有限公司', value: 571 },
  { name: '深圳市卓异科技有限公司', value: 2071 },
  { name: '嘉兴汇新机械科技有限公司', value: 390 },
  { name: '嘉兴旺坤商贸有限公司', value: 640 },
  { name: '上海象王服饰有限公司', value: 230 },
  { name: '嘉兴彩笺摄影服务有限公司', value: 1090 },
  { name: '浙江晶科光伏科技有限公司', value: 890 },
  { name: '嘉兴市捌玖仟餐饮管理有限公司', value: 1190 },
];
const TYPES = [
  { name: '水能耗数据', unit: 'T' },
  { name: '电能耗数据', unit: 'KW.H' },
]

class ParkEnergyConsumption extends Component {

  state = {
    modalVisible: false,
    type: 0
  }

  componentDidMount() {
    callApi({
      api: 'totalenergy',
      success: (response) => {
      }
    });
  }

  setModalVisible(modalVisible, type) {
    if (type !== undefined) {
      this.setState({ type });
    }
    this.setState({ modalVisible });
  }

  render() {
    const LAYOUTCONF = [
      [{ x: 0, y: 2, w: 7, h: 8 }, <One title='水能耗' openModal={(type) => this.setModalVisible(true, type)} />],
      [{ x: 7, y: 2, w: 10, h: 8 }, <Two title='总能耗' />],
      [{ x: 17, y: 2, w: 7, h: 8 }, <Three title='电能耗' openModal={(type) => this.setModalVisible(true, type)} />],
      [{ x: 0, y: 10, w: 12, h: 14 }, <Four title='月度用水量分析' size={widgetSize(12, 14)} />],
      [{ x: 12, y: 10, w: 12, h: 14 }, <Five title='月度用电量分析' size={widgetSize(12, 14)} />]
    ];
    return (
      <div className='eh-data-park-energy-consumption'>
        <Layout conf={LAYOUTCONF} />
        <Modal
          title={TYPES[this.state.type]['name']}
          visible={this.state.modalVisible}
          footer={null}
          onCancel={() => this.setModalVisible(false)}
        >
          <ReactGridLayout rowHeight={document.body.clientHeight / 16} margin={[24, 24]} cols={4}>
            {
              WATER.map(({ name, value }, index) => {
                // console.log(index % 4, Number((index / 4).toFixed(0)) * 2)

                return (
                  <div key={index} data-grid={{ x: index % 4, y: Math.floor(index / 4) * 2, w: 1, h: 2, static: true }}>
                    <span>{name}</span>
                    <span>{value}</span>
                    <span>{TYPES[this.state.type]['unit']}</span>
                  </div>
                )
              })
            }
          </ReactGridLayout>
        </Modal>
      </div >
    );
  }
}

export default ParkEnergyConsumption;
