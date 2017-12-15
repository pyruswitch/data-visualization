import { callApi as callApiBk, getUrlParams } from 'utils';
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
  // X 用户统计
  communityuseract: '/datav/communityuseract',
  // X 每日新增
  daynewusertrend: '/datav/daynewusertrend',
  // X 每日活跃
  dayactusertrend: '/datav/dayactusertrend',
  // X 每日累计
  daytotalusertrend: '/datav/daytotalusertrend',
  // X 用户性别
  usergender: '/datav/usergender',
  /***************************** 园区收入 *****************************/
  // X 订单列表
  parkorder: '/datav/parkorder',
  // X 订单类型个数统计
  ordertypecount: '/datav/ordertypecount',
  // X 订单类型金额统计
  ordertypeamount: '/datav/ordertypeamount',
  // 订单支付渠道个数统计
  orderchannelcount: '/datav/orderchannelcount',
  // X 月份单量统计
  monthcount: '/datav/monthcount',
  // X 月份总额统计
  monthamount: '/datav/monthamount',
  // X 订单总额统计
  orderamount: '/datav/orderamount',
  // X 订单总量统计
  ordercount: '/datav/ordercount',
  /***************************** 园区招商 *****************************/
  // 总资产 没有接口
  // X 企业名册
  companyespon: '/datav/Companyespon',
  // X 企业入驻情况 - 今年签约数和今年到期数为0
  settledenter: '/datav/settledenter',
  // X 招商引资 - 数据为0
  inviteBusiness: '/datav/InviteBusiness',
  // X 行业分析
  companytype: '/datav/Companytype',
  // X 入住率
  occupancyrate: '/datav/occupancyrate',
  // X 年租金收入
  rentalamount: '/datav/rentalamount',
  // X 在租面积/待租面积
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
const { ns } = getUrlParams(location.href);
const callApi = ({ api, success, error }) => callApiBk({
  api: apiMaps[api],
  method: 'GET',
  data: { ns },
  success: (response) => {
    success(response);
  }
});

export default callApi;
