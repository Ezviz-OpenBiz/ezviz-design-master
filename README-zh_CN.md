<p align="center">
  <a href="https://saastest3.ys7.com/evvd/">
    <img width="200" src="https://es.ys7.com/ys/img/logo.256e18ae.png">
  </a>
</p>

<h1 align="center">Evv Design</h1>

<div align="center">

一套企业级 UI 设计语言和 React 组件库。


</div>

[![](https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*Ey3wTo-5__QAAAAAAAAAAABkARQnAQ)](https://saastest3.ys7.com/evvd/index-cn)

[English](./README.md) | [Português](./README-pt_BR.md) | 简体中文 | [Українською](./README-uk_UA.md)

## ✨ 特性

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 全链路开发和设计工具体系。
- 🌍 数十个国际化语言支持。
- 🎨 深入每个细节的主题定制能力。

## 🖥 兼容环境

- 现代浏览器和 IE11（需要 polyfills）。
- 支持服务端渲染。
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 📦 安装

```bash
npm install @ezviz/evvd --save
```

```bash
yarn add @ezviz/evvd
```

## 🔨 示例

```jsx
import { Button, DatePicker } from '@ezviz/evvd';

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker />
  </>
);
```

引入样式：

```jsx
import '@ezviz/evvd/dist/@ezviz/evvd.css'; // or '@ezviz/evvd/dist/@ezviz/evvd.less'
```

### 🌈 定制主题

参考 [定制主题](https://saastest3.ys7.com/evvd/docs/react/customize-theme-cn) 文档。

### 🛡 TypeScript

参考 [在 TypeScript 中使用](https://saastest3.ys7.com/evvd/docs/react/use-in-typescript-cn)。

## 🌍 国际化

参考 [国际化文档](https://saastest3.ys7.com/evvd/docs/react/i18n-cn)。


## ⌨️ 本地开发

你可以使用 Gitpod 进行在线开发：

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ezviz-saas/ezviz-design-master)

或者克隆到本地开发:

```bash
$ git clone git@github.com:ezviz-saas/ezviz-design-master.git
$ cd ezviz-design-master
$ npm install
$ npm start
```

打开浏览器访问 http://127.0.0.1:8001

