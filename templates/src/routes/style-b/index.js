import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/base-components/Header';
import Route from 'react-router-dom/Route';
import { GridDemo, TasksManagement, IntelligentAccessControl, ParkEnergyConsumption, CustomerService, ParkInvestment, OrderFlow, IntelligentParking } from './routes';
import { Helmet } from 'react-helmet';
import './index.less';

class StaticElementsLayout extends React.PureComponent {
  render() {
    const { match } = this.props;
    return (
      <div className='eh-visualization'>
        <div>
          <Helmet>
            <title>深圳科技园数据舱</title>
          </Helmet>
          <Header
            activeKey='0'
            menu={[
              { path: 'park-investment', value: '园区招商' },
              { path: 'customer-service', value: '客户服务' },
              { path: 'intelligent-access-control', value: '智能门禁' },
              { path: 'order-flow', value: '园区收入' },
              { path: 'park-energy-consumption', value: '智能能耗' },
              { path: 'tasks-management', value: '任务管理' }
            ]}
          />
          {/* <GridDemo /> */}
          <Route exact path='/park-energy-consumption' component={ParkEnergyConsumption} />
          <Route exact path='/intelligent-access-control' component={IntelligentAccessControl} />
          <Route exact path='/park-investment' component={ParkInvestment} />
          <Route exact path='/customer-service' component={CustomerService} />
          <Route exact path='/order-flow' component={OrderFlow} />
          <Route exact path='/intelligent-parking' component={IntelligentParking} />
          <Route exact path='/tasks-management' component={TasksManagement} />
        </div>
      </div>
    );
  }
}

export default StaticElementsLayout;
