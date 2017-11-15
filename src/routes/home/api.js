import { callApi as callApiBk } from 'utils';
const apiMaps = {
  /***************************** 园区收入 *****************************/
  // 订单列表
  parkorder: '/datav/parkorder',
  // 订单类型个数统计
  ordertypecount: '/datav/ordertypecount',
  // 订单类型金额统计
  ordertypeamount: '/datav/ordertypeamount',
  // 订单支付渠道个数统计
  orderchannelcount: '/datav/orderchannelcount',
  // 月份单量统计
  monthcount: '/datav/monthcount',
  // 月份总额统计
  monthamount: '/datav/monthamount',
  // 订单总额统计
  orderamount: '/datav/orderamount',
  // 订单总量统计
  ordercount: '/datav/ordercount',

  /***************************** 园区招商 *****************************/
  // 总资产 没有接口
  // 企业名册
  companyespon: '/datav/Companyespon',
  // 企业入驻情况 - 今年签约数和今年到期数为0
  settledenter: '/datav/settledenter',
  // 招商引资 - 数据为0
  inviteBusiness: '/datav/InviteBusiness',
  // 行业分析
  companytype: '/datav/Companytype',
  // 入住率 - 没有问题
  occupancyrate: '/datav/occupancyrate',
  // 单位租金 - 数据为0
  unitrental: '/datav/unitrental',
  // 年租金收入 - 数据为0
  rentalamount: '/datav/rentalamount',
  // 在租面积 - 数据为0
  leasedarea: '/datav/leasedarea',
  // 在租面积/待租面积
  montharea: '/datav/montharea',

  /***************************** 客户服务 *****************************/
  // 任务类型分布
  tasktypecount: '/datav/tasktypecount',
  // 服务模块活跃度
  boardvita: '/datav/boardvita',
  // 已完成任务、总任务数
  taskclose: '/datav/taskclose',
  // 每日任务数
  daytaskorder: '/datav/daytaskorder',
  // 平均响应时间
  tasktyperespon: '/datav/tasktyperespon',
  // 代办任务
  pengdingtask: '/datav/pengdingtask',
  // 任务状态分布
  taskstatus: '/datav/taskstatus'
};

const callApi = ({ api, success, error }) => callApiBk({
  api: apiMaps[api],
  method: 'GET',
  data: { ns: 1000000 },
  success: (response) => {
    success(response);
  }
});

export default callApi;
