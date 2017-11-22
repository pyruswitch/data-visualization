import React, { Component } from 'react';
import { Modal } from 'antd';
import { Widget, Layout } from 'components';
import { Electricity, PowerAnalysis, Total, Water, WaterAnalysis } from './widgets';
import callApi from 'api';
import './index.less';

// const LAYOUTCONF = [
//   [{ x: 0, y: 3, w: 10, h: 7 }, <Total />],
//   [{ x: 0, y: 10, w: 10, h: 7 }, <Water />],
//   [{ x: 0, y: 17, w: 10, h: 7 }, <Electricity />],
//   [{ x: 10, y: 3, w: 14, h: 10 }, <WaterAnalysis />],
//   [{ x: 10, y: 13, w: 14, h: 11 }, <PowerAnalysis />]
// ];

// const ParkEnergyConsumption = () => (
//   <div className='eh-data-park-energy-consumption'>
//     <Layout conf={LAYOUTCONF} />
//   </div>
// );

class ParkEnergyConsumption extends Component {

  state = {
    modalVisible: true,
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
      [{ x: 0, y: 2, w: 7, h: 8 }, <Water openModal={(title) => this.setModalVisible(true, title)} />],
      [{ x: 7, y: 2, w: 10, h: 8 }, <Total />],
      [{ x: 17, y: 2, w: 7, h: 8 }, <Electricity openModal={(title) => this.setModalVisible(true, title)} />],
      [{ x: 0, y: 10, w: 12, h: 14 }, <WaterAnalysis />],
      [{ x: 12, y: 10, w: 12, h: 14 }, <PowerAnalysis />]
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
          <p className='com-card'>
            <span>XXXXX居民楼 ***02</span>
            <span>30,890,9809</span>
            <span>KW.H</span>
          </p>
          <p className='com-card'>
            <span>XXXXX居民楼 ***02</span>
            <span>30,890,9809</span>
            <span>KW.H</span>
          </p>
          <p className='com-card'>
            <span>XXXXX居民楼 ***02</span>
            <span>30,890,9809</span>
            <span>KW.H</span>
          </p>
          <p className='com-card'>
            <span>XXXXX居民楼 ***02</span>
            <span>30,890,9809</span>
            <span>KW.H</span>
          </p>
          <p className='com-card'>
            <span>XXXXX居民楼 ***02</span>
            <span>30,890,9809</span>
            <span>KW.H</span>
          </p>
          <p className='com-card'>
            <span>XXXXX居民楼 ***02</span>
            <span>30,890,9809</span>
            <span>KW.H</span>
          </p>
        </Modal>
      </div>
    );
  }
}

export default ParkEnergyConsumption;
