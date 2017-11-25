import React, { Component } from 'react';
import { Modal } from 'antd';
import { Widget, Layout } from 'components';
import RGL, { WidthProvider } from 'react-grid-layout';
import { Three, Five, Two, One, Four } from './widgets';
import callApi from 'api';
import { widgetSize } from 'config';
import './index.less';
const ReactGridLayout = WidthProvider(RGL);

class ParkEnergyConsumption extends Component {

  state = {
    modalVisible: false,
    title: null
  }

  componentDidMount() {
    callApi({
      api: 'totalenergy',
      success: (response) => {

      }
    });
  }

  setModalVisible(modalVisible, title) {
    this.setState({ modalVisible, title });
  }

  render() {
    const LAYOUTCONF = [
      [{ x: 0, y: 2, w: 7, h: 8 }, <One title='水能耗' openModal={(title) => this.setModalVisible(true, title)} />],
      [{ x: 7, y: 2, w: 10, h: 8 }, <Two title='总能耗' />],
      [{ x: 17, y: 2, w: 7, h: 8 }, <Three title='电能耗' openModal={(title) => this.setModalVisible(true, title)} />],
      [{ x: 0, y: 10, w: 12, h: 14 }, <Four title='月度用水量分析' size={widgetSize(12, 14)} />],
      [{ x: 12, y: 10, w: 12, h: 14 }, <Five title='月度用电量分析' size={widgetSize(12, 14)} />]
    ];
    return (
      <div className='eh-data-park-energy-consumption'>
        <Layout conf={LAYOUTCONF} />
        <Modal
          title={this.state.title}
          visible={this.state.modalVisible}
          footer={null}
          onCancel={() => this.setModalVisible(false)}
        >
          <ReactGridLayout rowHeight={document.body.clientHeight / 16} margin={[24, 24]} cols={4}>
            <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
              <span>XXXXX居民楼 ***02</span>
              <span>30,890,9809</span>
              <span>KW.H</span>
            </div>
            <div key="b" data-grid={{ x: 1, y: 0, w: 1, h: 2, static: true }}>
              <span>XXXXX居民楼 ***02</span>
              <span>30,890,9809</span>
              <span>KW.H</span>
            </div>
            <div key="c" data-grid={{ x: 2, y: 0, w: 1, h: 2, static: true }}>
              <span>XXXXX居民楼 ***02</span>
              <span>30,890,9809</span>
              <span>KW.H</span>
            </div>
            <div key="d" data-grid={{ x: 3, y: 0, w: 1, h: 2, static: true }}>
              <span>XXXXX居民楼 ***02</span>
              <span>30,890,9809</span>
              <span>KW.H</span>
            </div>
            <div key="e" data-grid={{ x: 0, y: 2, w: 1, h: 2, static: true }}>
              <span>XXXXX居民楼 ***02</span>
              <span>30,890,9809</span>
              <span>KW.H</span>
            </div>
            <div key="f" data-grid={{ x: 1, y: 2, w: 1, h: 2, static: true }}>
              <span>XXXXX居民楼 ***02</span>
              <span>30,890,9809</span>
              <span>KW.H</span>
            </div>
          </ReactGridLayout>
        </Modal>
      </div>
    );
  }
}

export default ParkEnergyConsumption;
