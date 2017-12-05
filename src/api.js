import { callApi as callApiBk } from 'utils';
const apiMaps = {
  /***************************** 智慧社交 *****************************/
  // X 报名人数、活动总数、平均每场人数
  activityenrollment: '/datav/activityenrollment',
  // X 帖子发布情况
  forumthreads: '/datav/forumthreads',
  // X 帖子标签分布数
  activitytype: '/datav/activitytype',
  // X 帖子热度分布
  activityattention: '/datav/activityattention',
  // X 话题榜前五
  trendingtopics: '/datav/trendingtopics',
  // X 最新活动
  newactivity: '/datav/newactivity',
  // X 最新帖子
  newforum: '/datav/newforum',
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

  /***************************** 智慧办公 *****************************/
  // X 任务类型分布
  tasktypecount: '/datav/tasktypecount',
  // X 服务模块活跃度
  boardvita: '/datav/boardvita',
  // X 已完成任务、总任务数
  taskclose: '/datav/taskclose',
  // X 每日任务数
  daytaskorder: '/datav/daytaskorder',
  // X平均响应时间
  tasktyperespon: '/datav/tasktyperespon',
  // X 代办任务
  pengdingtask: '/datav/pengdingtask',
  // X 任务状态分布
  taskstatus: '/datav/taskstatus',
  // 品质核查任务列表
  qualityinspetask: '/datav/qualityinspetask',

  /***************************** 任务管理 *****************************/
  // 物业巡检任务列表
  equipmentinspetask: '/datav/equipmentinspetask',
  // 今日巡检任务：（总数、代办数、已办、已过期数、任务完成质量板块-完成率、
  // 暂无及时响应率需要产品重新定义）
  todayequipment: '/datav/todayequipment',
  // 今日核查任务：（总数、代办数、已办、已过期数、整改率、延误率、任务完成质量板块-完成率、
  // 暂无及时响应率需要产品重新定义）
  todayquality: '/datav/todayquality',
  // 任务类型分布：（物业巡检任务数、品质核查任务数、总完成率）
  inspectiontasktype: '/datav/inspectiontasktype',

  /***************************** 园区能耗 *****************************/
  // 水、电、总能耗
  totalenergy: '/datav/totalenergy',
  // 每月楼栋水能耗分布
  buildmonthwatermeter: '/datav/buildmonthwatermeter',
  // 每月楼栋电能耗分布
  buildmonthelectr: '/datav/buildmonthelectr'
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
