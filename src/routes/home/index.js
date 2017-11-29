import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './logo.svg';
import Title from './title.svg';
import SubTitle from './subtitle.svg';
import './index.less';

class Home extends Component {
  render() {
    return (
      <div className="ehome-home">
        <div>
          <img className='logo' src={Logo} alt="" />
          <img className='title' src={Title} alt="" />
          <img src={SubTitle} alt="subtitle" />
          <div onClick={() => this.props.history.push('/sa/social-intercourse')}>点击进入</div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {

};

export default Home;
