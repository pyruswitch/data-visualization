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
    return (
      <div className='eh-visualization'>
        <div>
          <Header
            activeKey='0'
            menu={[
              {
                value: '智慧生活',
                submenu:
                  [
                    { value: '园区社交', path: 'social-intercourse' }
                  ]
              },
              {
                value: '智慧运营',
                submenu:
                  [
                    { value: '客户服务', path: 'customer-service' }
                  ]
              },
              {
                value: '智慧物业', submenu:
                  [
                    { value: '招商租赁', path: 'park-investment' },
                    { value: '园区收入', path: 'order-flow' },
                    { value: '智能停车', path: 'intelligent-parking' },
                    { value: '智能门禁', path: 'intelligent-access-control' }
                  ]
              },
              {
                value: '智慧能源', path: 'park-energy-consumption'
              }
            ]} />
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
