## 驾驶舱 - 快速入门
### 技术约定
使用react作为view层框架，antd-design作为核心组件库, less作为css编译器

### 本地开发
在package.json中的proxy字段配置代理
```bash
$ npm i
$ npm run start
$ open http://localhost:3000/
```

### 部署
```bash
$ npm run build
```

### 产品约定
#### 内部标准模块列表
```
园区社交
园区收入
招商租赁
客户服务
智慧能源
智能门禁【二期】
智能停车【二期】
物业管控【二期】
园区商城【二期】
资产管理【二期】
服务联盟【二期】
```

#### 标准菜单
```
|- 智慧生活
|---- 园区社交
|---- 园区商城（二期）
|
|- 智慧运营
|---- 客户服务
|---- 服务联盟（二期）
|
|- 智慧物业
|----招商租赁
|----资产管理（二期）
|----园区收入
|----智能停车（二期）
|----智能门禁（二期）
|
|- 智慧能源
```

#### 菜单
```
|- 智慧社交
|---- 园区社交
|---- 园区商城（二期）
|
|- 智慧办公
|---- 客户服务
|---- 服务联盟（二期）
|
|- 智慧物业
|----招商租赁
|----资产管理（二期）
|----园区收入
|----智能停车（二期）
|----智能门禁（二期）
|
|- 智慧能源
```

### 测试地址
http://datav-beta.zuolin.com/data-visualization/index.html?ns=999969#/sa/social-intercourse
许娟  16:43:14
http://datav.lab.everhomes.com/data-visualization/index.html?ns=999969#/sa/social-intercourse
