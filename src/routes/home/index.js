import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './logo.svg';
import Title from './title.svg';
import './index.less';

class Home extends Component {
  render() {
    return (
      <div className="ehome-home">
        <div>
          <img className='logo' src={Logo} alt="" />
          <img className='title' src={Title} alt="" />
          <span>
            智富汇，是北科建集团嘉兴创新园为其园区内的企业及白领定制的专属移动服务平台，提供多样化的园区服务。智慧社交让园区用户可以轻松互动、自由加入各类社圈、展现自我、放飞自我。智慧办公为小微企业、园区企业提供各种预约服务、人力支持、创业指导、市场推广等服务，让创业、工作更简单。智慧物业为园区用户解决生活的烦恼，一键物业报修，线上品质核查，让生活更简单。智慧能源采集园区能耗数据、自动化对数据分析，制定节能方案、实现异常报警。智富汇，让园区生活更智慧。
          </span>
          <div onClick={() => this.props.history.push('/sa/social-intercourse')}>点击进入</div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {

};

export default Home;
