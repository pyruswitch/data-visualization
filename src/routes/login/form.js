import React, { PureComponent, Component } from 'react';
// import { callApi, cache } from 'eh-util';
import { withRouter } from 'react-router-dom'
// import store from 'utils/localStorage';
import sha256 from 'sha256';
import moment from 'moment';
import QueueAnim from 'rc-queue-anim';
// import api from './api';

import { Button, Row, Form, Input, notification, Icon } from 'antd';
import Logo from 'images/login/logo.png';

const FormItem = Form.Item;

class LoginForm extends (PureComponent || Component) {
  constructor(props) {
    super(props);
    this.state = { loading: false }
  }

  render() {
    const prefixCls = 'ehome-loginform'
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-logo`}>
          <img src={Logo} alt='Logo' />
        </div>
        <Form>
          <QueueAnim delay={300} duration={800}>
            <div key='1'>
              <FormItem hasFeedback>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: '请输入正确的用户名'
                    }
                  ]
                })(<Input size="large" onPressEnter={this.handleOk} placeholder="用户名" />)}
              </FormItem>
            </div>
            <div key='2'>
              <FormItem hasFeedback>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码'
                    }
                  ]
                })(<Input size="large" type="password" onPressEnter={this.handleOk} placeholder="密码" />)}
              </FormItem>
            </div>
            <div key='3'>
              <Row>
                <Button type="primary" size="large" onClick={this.handleOk} loading={this.state.loading}>登录</Button>
              </Row>
            </div>
          </QueueAnim>
        </Form>
      </div>
    )
  }
  handleOk = () => {
    this.login()
  }
  login = (username, password, handleError) => {
    const { route } = this.props;
    this.props.history.replace(route)

    notification.open({
      message: `登录成功`,
      description: <span>{moment().locale('zh-cn').format('LLLL')}</span>,
      icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
      duration: 2.5,
      placement: 'bottomRight'
    });
  }

  handleError = (username, password, errorDescription, errorCode) => {

  }
}


export default withRouter(Form.create()(LoginForm));
