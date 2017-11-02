## 快速入门
### 技术约定
使用react作为view层框架，antd-design作为核心组件库, less作为css编译器

### 由框架约定的目录
src/functions: 放置功能模块，以菜单为基准，各模块开发充分解耦
src/images: 放置图片资源，以routes或者functions名作为区分
src/routes: 框架外层路由，404/IE低版浏览器不支持/登录等
src/themes: 放置主题，可根据域名自定义主题
src/utils: 通用的工具函数
src/components: 通用的组件

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

### 开发指南
1. ...
2. ...
3. ...
