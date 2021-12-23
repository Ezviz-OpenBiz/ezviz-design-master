<p align="center">
  <a href="https://saastest3.ys7.com/ezd/">
    <img width="200" src="https://es.ys7.com/ys/img/logo.256e18ae.png">
  </a>
</p>

<h1 align="center">EZ Design</h1>

<div align="center">

Мова інтерфейсу корпоративного класу та React UI бібліотека.


</div>

[![](https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*Yl83RJhUE7kAAAAAAAAAAABkARQnAQ)](https://saastest3.ys7.com/ezd/index-cn)

[English](./README.md) | [Português](./README-pt_BR.md) | [简体中文](./README-zh_CN.md) | Українською

## ✨ Особливості

- 🌈 UI корпоративного класу, призначений для веб-додатків.
- 📦 Набір високоякісних компонентів React з коробки.
- 🛡 Написано на TypeScript із вбудованими статичними типами.
- ⚙️ Весь пакет дизайнерських ресурсів та засобів розробки.
- 🌍 Підтримка інтернаціоналізації для десятків мов.
- 🎨 Потужне налаштування теми в кожній деталі.

## 🖥 Підтримка навколишнього середовища

- Сучасні браузери та Internet Explorer 11 (з [поліфілами](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
- Рендеринг на стороні сервера (SSR)
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| IE11, Edge | 2 останні версії | 2 останні версії | 2 останні версії | 2 останні версії |

## 📦 Встановлення

```bash
npm install @ezviz/ezd
```

```bash
yarn add @ezviz/ezd
```

## 🔨 Використання

```jsx
import { Button, DatePicker } from '@ezviz/ezd';

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
  </>
);
```

Та імпортуй стиль вручну:

```jsx
import '@ezviz/ezd/dist/@ezviz/ezd.css'; // or '@ezviz/ezd/dist/@ezviz/ezd.less'
```

### TypeScript

`ezd` написано на TypeScript із повною типізацією, вибери [Використання у TypeScript](https://saastest3.ys7.com/ezd/docs/react/use-in-typescript-cn) щоб розпочати.

## 🌍 Інтернаціоналізація

Десятки мов підтримуються в `@ezviz/ezd`, дивись [i18n](https://saastest3.ys7.com/ezd/docs/react/i18n-cn).


## ⌨️ Розробка

Використовуй Gitpod, безкоштовне середовище розробки для GitHub.

[![Відкрити у Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ezviz-saas/ezviz-design-master)

Або клонуй локально:

```bash
$ git clone git@github.com:ezviz-saas/ezviz-design-master.git
$ cd ezviz-design-master
$ npm install
$ npm start
```

Відкрий у браузері http://127.0.0.1:8001
