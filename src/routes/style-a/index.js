import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Route } from 'react-router-dom';
import { SocialIntercourse, TasksManagement, IntelligentAccessControl, ParkEnergyConsumption, CustomerService, ParkInvestment, OrderFlow, IntelligentParking } from './routes';
import { Helmet } from 'react-helmet';
import './index.less';

class StaticElementsLayout extends React.PureComponent {
  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <div className='eh-visualization'>
        <div>
          <Helmet>
            <title>深圳科技园数据舱</title>
          </Helmet>
          <Header
            activeKey='0'
            menu={[
              { path: 'social-intercourse', value: '智慧社交' },
              { path: 'park-investment', value: '园区招商' },
              { path: 'customer-service', value: '客户服务' },
              { path: 'intelligent-access-control', value: '智能门禁' },
              { path: 'order-flow', value: '园区收入' },
              { path: 'park-energy-consumption', value: '智能能耗' },
              { path: 'tasks-management', value: '任务管理' }
            ]}
          />
          <Route exact path={`${match.path}/social-intercourse`} component={SocialIntercourse} />
          <Route exact path={`${match.path}/park-energy-consumption`} component={ParkEnergyConsumption} />
          <Route exact path={`${match.path}/intelligent-access-control`} component={IntelligentAccessControl} />
          <Route exact path={`${match.path}/park-investment`} component={ParkInvestment} />
          <Route exact path={`${match.path}/customer-service`} component={CustomerService} />
          <Route exact path={`${match.path}/order-flow`} component={OrderFlow} />
          <Route exact path={`${match.path}/intelligent-parking`} component={IntelligentParking} />
          <Route exact path={`${match.path}/tasks-management`} component={TasksManagement} />
        </div>
      </div>
    );
  }
}

export default StaticElementsLayout;
