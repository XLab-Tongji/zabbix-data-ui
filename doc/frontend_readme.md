# 重要组件及关键函数
## MainPages

### 
1.	ClusterPage.vue  
  集群组件，在ui中展示所有集群信息。  

2. HostPage.vue  
主机组件，展示一个集群中的所有主机信息。  

    * *mount()*  
    请求目标集群下hosts信息  

    * *handleCommand(command)*  
    element-ui el-dropdown组件事件, 处理下载和删除逻辑  

    * *selectTimeChange*  
    自定义组件SelectBox事件, 接受[timeFrom, timeTill]数组, 并调用下载请求, 完成下载

3.	ItemDataPage.vue  
监控项组件，包含一个主机的监控项信息，实现对数据监控项的查找显示功能  

    * *classSelectChange(data)*  
    element-ui el-select组件事件, 选择监控项大类, 并根据选项动态更新第二级下拉框内数据  

    * *itemsSelectChange(data)*  
    element-ui el-select组件事件, 选择监控项, 调用接口获取监控项数据, 更新echart实例option属性  

    * *handleEloptionChange*  
    element-ui el-select组件事件, 选择用于对比指定监控项数据的主机, 调用接口获取该主机监控项数据, 动态更新echarts实例option属性  

    * *handleTimePickerChange*  
    处理时间选择事件, 选择确定后即调用接口请求指定时间范围内监控项数据, 动态更新echarts实例option属性  
    * *getOption(data, title, showSth, hostName)*  
    返回用于渲染echarts实例的option对象  

    * *UpdateCompareOption(hostname, data, child, opration)*  
    根据opration的值(add/delete)动态增加或删除echarts实例中series元素, 用于选择对比主机之后, 是否需要新增或删除图表图例

4.	LoginPage.vue  
项目的起始页面，实现登录功能，登录之后跳转用户主页。

5.	RegisterPage.vue  
注册页面，实现注册功能。

6.	UserMainPage.vue  
用户主页，监控功能入口。

## Component

- ItemTable.vue  
表格组件，展示选中监控项数据  

- SelectBox.vue  
自定义弹出框组件, 选择起止时间

## ConfigPages
- HostConfigPage.vue  
主机配置信息页面

- ZabbixConfigPage.vue  
集群配置信息页面

## OtherPages
- GroupSelectPage.vue  
添加主机时，选择设置群组信息，显示该组件页面，实现选择功能

- SuccessAddHost.vue  
添加主机成功，显示该组件页面

- SuccessConnectPage.vue  
添加集群成功，显示该组件页面

- TemplateSelectPage.vue  
添加主机时，选择可用的模板，显示该组件页面，实现选择功能

# 前端路由

## routers - index.js
```javascript
    routes: [
    {
      path: '/', 
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage
    },
    {
      path: '/user/:userid',
      name: 'UserMainPage',
      component: UserMainPage,
      children: [
        {
          path: 'cluster',
          name: 'ClusterPage',
          component: ClusterPage
        },
        {
          path: 'hosts/:ip/:port',
          name: 'HostPage',
          component: HostPage
        },
        {
          path: 'itemcompare',
          name: 'ItemComparePage',
          component: ItemComparePage
        },
        {
          path: 'itemdata/:hostid/:hostname',
          name: 'ItemDataPage',
          component: ItemDataPage
        },
        {
          path: 'zabbixconfig',
          name: 'ZabbixConfigPage',
          component: ZabbixConfigPage
        },
        {
          path: 'hostconfig',
          name: 'HostConfigPage',
          component: HostConfigPage
        },
        {
          path: 'successconnect',
          name: 'SuccessConnectPage',
          component: SuccessConnectPage
        },
        {
          path: 'successaddhost',
          name: 'SuccessAddHost',
          component: SuccessAddHost
        },
        {
          path: 'templateselect',
          name: 'TemplateSelectPage',
          component: TemplateSelectPage
        },
        {
          path: 'groupselect',
          name: 'GroupSelectPage',
          component: GroupSelectPage
        }
      ]
    }
  ]
```

其中children下路由为UserMainPage子路由, 共享UserMainPage中通用组件, 了解更多, 请前往[vue-router](https://router.vuejs.org/zh/)  

# Vuex 

## store  
1. zabbixGroup.js  
统一管理zabbix group状态, 用于配置主机时, 保存group选择状态  

2. zabbixTemplate.js  
统一管理zabbix group状态, 用于配置主机时, 保存template选择状态  

3. mutation-types.js  
集中定义vuex mutationss 

了解更多, 请前往[vuex](https://vuex.vuejs.org/zh/guide/)

# API
## mock.js模拟接口  
1. `Mock.mock('/api/hosts', 'get', hosts)`   
模拟请求host数据接口, 返回hostid, host, description  

2. `Mock.mock('/api/itemdata', 'get', items)`  
模拟请求监控项数据接口, 返回timestamp, value  

3. `Mock.mock('/api/templates', 'get', templates)`  
模拟请求模版数据接口, 返回templateid, host/模版名称  
4. `Mock.mock('/api/groups', 'get', groups)`  
模拟请求组信息接口, 返回hostid/组id, host/组名称


## 后端接口调用 api.js  
  1. *getHosts(context, ip, port)*  
  请求指定集群下主机信息, 返回promise对象  
  
  2. *getItemsData(context, ip, port, hostid, key, timeFrom, timeTill)*  
  请求指定主机、指定监控项、指定起止时间的监控项数据, 返回promise对象



