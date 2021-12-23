<p align="center">
  <a href="https://saastest3.ys7.com/ezd/">
    <img width="200" src="https://es.ys7.com/ys/img/logo.256e18ae.png">
  </a>
</p>

<h1 align="center">EZ Design</h1>

<div align="center">

An enterprise-class UI design language and React UI library.

</div>

[![](https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*Yl83RJhUE7kAAAAAAAAAAABkARQnAQ)](https://saastest3.ys7.com/ezd/index-cn)

English | [Português](./README-pt_BR.md) | [简体中文](./README-zh_CN.md) | [Українською](./README-uk_UA.md)

## ✨ Features

- 🌈 Enterprise-class UI designed for web applications.
- 📦 A set of high-quality React components out of the box.
- 🛡 Written in TypeScript with predictable static types.
- ⚙️ Whole package of design resources and development tools.
- 🌍 Internationalization support for dozens of languages.
- 🎨 Powerful theme customization in every detail.

## 🖥 Environment Support

- Modern browsers and Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
- Server-side Rendering
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 📦 Install

```bash
npm install @ezviz/ezd
```

```bash
yarn add @ezviz/ezd
```

## 🔨 Usage

```jsx
import { Button, DatePicker } from '@ezviz/ezd';

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
  </>
);
```

And import style manually:

```jsx
import '@ezviz/ezd/dist/@ezviz/ezd.css'; // or '@ezviz/ezd/dist/@ezviz/ezd.less'
```

### TypeScript

`ezd` is written in TypeScript with complete definitions, check [Use in TypeScript](https://saastest3.ys7.com/ezd/docs/react/use-in-typescript-cn) to get started.

## 🌍 Internationalization

Dozens of languages supported in `ezd`, see [i18n](https://saastest3.ys7.com/ezd/docs/react/i18n-cn).

## ⌨️ Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ezviz-saas/ezviz-design-master)

Or clone locally:

```bash
$ git clone git@github.com:ezviz-saas/ezviz-design-master
$ cd ezviz-design-master
$ npm install
$ npm start
```

Open your browser and visit http://127.0.0.1:8001
