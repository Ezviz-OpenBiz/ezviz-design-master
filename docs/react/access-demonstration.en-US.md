---
order: 7
title: 组件库接入示例
---

# 新项目
​

如果是新建的项目话，只需要引入我们的萤石组件库即可，使用方式与 antd 一样

## 安装


```javascript
npm install @ezviz/ezd
```
## 配置按需加载，动态主题


```javascript
// config-overrides.js
const {
  override,
  disableEsLint,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");
module.exports = {
  webpack: override(
    disableEsLint(),
    //按需加载
    fixBabelImports('import', {
        libraryName: '@ezviz/ezd',
        libraryDirectory: 'es',
        style: true,   // 支持应用方式 true 表示  less, css 表示 css 应用的方式，不支持动态主题
      }),
    // 支持 less
    addLessLoader({
      javascriptEnabled: true,
      // 配置动态主题
      modifyVars: {
        "@ezd-prefix": "ezd", // 样式前缀名称
        "@ezd-primary-color": "#3E80FF", // 主题色
      },
      cssModules: {
        localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
      },
    }),
  ),
};
```
## 全局配置（国际化）


```javascript
// 入口页面：index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConfigProvider } from '@ezviz/ezd';
import zhHK from '@ezviz/ezd/lib/locale/zh_HK';
import * as serviceWorker from './serviceWorker';

import moment from 'moment';
import 'moment/locale/zh-hk';
moment.locale('zh-hk');

ConfigProvider.config({
  prefixCls: 'ezd', 
  iconPrefixCls: 'ezdicon', 
});
ReactDOM.render(
  <React.StrictMode>
   // 支持配置 html 前缀名称
    <ConfigProvider prefixCls="ezd" locale={zhHK}>
        <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
## 引入使用


```javascript
/**
 * 提示组件
 */
import React, { ReactNode } from "react";
import { Button } from '@ezviz/ezd';
import styles from "./index.module.less";

type NoticeProps = {
  className?: string; // 页面class类名
  info: string | ReactNode; // 提示信息
  sureText: string;
  onSure: () => void;
};

const Notice = (props: NoticeProps) => {
  const { info = "--", className = "", sureText = "知道了", onSure } = props;
  return (
    <div className={`${styles.noticeLayout} ${styles[className]}`}>
      <i className="iconfont iconico_tongzhi" />
      <span className={styles.info}>{info}</span>
      <Button className={styles.button} onClick={onSure}>
        {sureText}
      </Button>
      <i onClick={onSure} className="iconfont iconico_guanbi_xiao" />
    </div>
  );
};

export default Notice;
```
# 旧项目
​

可能之前已经使用antd作为组件库开发了，引入我们组件库一起开发，需要注意一些事项
​

## 安装


```javascript
npm install @ezviz/ezd
```
## 配置按需加载，动态主题


```javascript
// config-overrides.js
const {
  override,
  disableEsLint,
  addBabelPlugins,
  addLessLoader,
} = require("customize-cra");
module.exports = {
  webpack: override(
    disableEsLint(),
    //多组件库，按需加载配置
    addBabelPlugins(
        ["import",
        { 
          libraryName: "antd",
          libraryDirectory: "es",
          style: true,
        },
        `fix-antd-imports`
      ],
        ["import",
        { 
          libraryName: "@ezviz/ezd",
          libraryDirectory: "es",
          style: true,
        },
        `fix-@ezviz/ezd-imports`
      ]),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        "@ant-prefix": "ant-device",  // antd 样式前缀，默认是ant
        "@primary-color": "#3E80FF", // antd 主题色
        "@ezd-prefix": "ezd-device", // ezd 样式前缀名称 默认是 ezd
    	 	"@ezd-primary-color": "#3E80FF", // ezd 主题色
      },
      cssModules: {
        localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
      },
    }),
  ),
};
```
## 全局配置（国际化）


```javascript
// 入口页面：index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConfigProvider } from '@ezviz/ezd';
import { ConfigProvider as  ConfigProvider1 } from 'antd';
import zhHK1 from '@ezviz/ezd/lib/locale/zh_HK';
import zhHK from 'antd/lib/locale/zh_HK';
import * as serviceWorker from './serviceWorker';
import moment from 'moment';
import 'moment/locale/zh-hk';
moment.locale('zh-hk');

ConfigProvider.config({
  prefixCls: 'ezd-device',
});
ConfigProvider1.config({
  prefixCls: 'ant-device',
});
// 国际化，及html前缀配置等功能，配置组件可以嵌套使用，互不干扰
ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider1 prefixCls="ant-device" locale={zhHK}>
      <ConfigProvider prefixCls="ezd-device" locale={zhHK1}>
          <App />
      </ConfigProvider>
    </ConfigProvider1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
## 引入使用


```javascript
/**
 * 提示组件
 */
import React, { ReactNode } from "react";
import { Button } from '@ezviz/ezd';
import {Button as Button1 } from 'antd';
import styles from "./index.module.less";

type NoticeProps = {
  className?: string; // 页面class类名
  info: string | ReactNode; // 提示信息
  sureText: string;
  onSure: () => void;
};

const Notice = (props: NoticeProps) => {
  const { info = "--", className = "", sureText = "知道了", onSure } = props;
  return (
    <div className={`${styles.noticeLayout} ${styles[className]}`}>
      <i className="iconfont iconico_tongzhi" />
      <span className={styles.info}>{info}</span>
      <Button className={styles.button} onClick={onSure}>
        {sureText}
      </Button>
      <Button1 className={styles.button} onClick={onSure}>
        {sureText}
      </Button1>
      <i onClick={onSure} className="iconfont iconico_guanbi_xiao" />
    </div>
  );
};

export default Notice;
```


