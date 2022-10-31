## 技术栈

| 技术栈 | 描述 | 官网 |
| --- | --- | --- |
| Vue3 | 渐进式 JavaScript 框架 | https://v3.cn.vuejs.org/ |
| TypeScript | JavaScript 的一个超集 | https://www.tslang.cn/ |
| Vite | 前端开发与构建工具 | https://cn.vitejs.dev/ |
| Element Plus | 基于 Vue 3，面向设计师和开发者的组件库 | https://element-plus.gitee.io/zh-CN/ |
| Pinia | 新一代状态管理工具 | https://pinia.vuejs.org/ |
| Vue Router | Vue.js 的官方路由 | https://router.vuejs.org/zh/ |


## 启动部署

### 环境准备

- 安装 Node

  版本：v14 或 v16

- 开发工具

  推荐 VSCode

- 必装插件

  VSCode 插件市场搜索并安装 Volar, 且一定要禁用 Vetur，不然代码会出现组件使用了但编译器还报组件未使用的警告信息，另外尤大也在 Vue3 生态话题说过 Volar 将会替代 Vetur 作为 Vue 的官方插件。

### 项目启动

1. npm install
2. npm run dev
3. 浏览器访问 http://localhost:3000

### 项目部署

- 本地打包

  ```
  npm run build:prod
  ```

  生成的静态文件位于项目根目录 dist 文件夹下

- 上传文件

  创建 `/usr/local/nginx/html/vue3` 目录，将打包生成 dist 的所有文件拷贝至此工作目录下

- nginx.cofig 配置

  ```
  server {
      listen     80;
      server_name  localhost;

      location / {
          root /usr/local/nginx/html/vue3;
          index index.html index.htm;
      }

      # 代理转发请求至网关，prod-api标识解决跨域问题
      # vapi.youlai.tech 线上接口地址
      location /prod-api/ {
          proxy_pass http://vapi.youlai.tech/;
      }
  }

  ```
## 本地接口

> 如果你了解一些Java后端SpringBoot，可以轻松在本地搭建接口环境.

1. 访问后端项目仓库地址：https://github.com/sww1740747758/railway_institute.git

3. 进入 [vite.config.ts](vite.config.ts)  为本地接口地址 http://localhost:8989 即可。


