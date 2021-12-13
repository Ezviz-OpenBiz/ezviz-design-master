<p align="center">
  <a href="https://saastest3.ys7.com/ezd/">
    <img width="200" src="https://es.ys7.com/ys/img/logo.256e18ae.png">
  </a>
</p>

<h1 align="center">EZ Design</h1>

<div align="center">

Uma solução empresarial de design e biblioteca UI para React.

</div>

[![](https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*Yl83RJhUE7kAAAAAAAAAAABkARQnAQ)](https://saastest3.ys7.com/ezd/index-cn)

[English](./README.md) | Português | [简体中文](./README-zh_CN.md) | [Українською](./README-uk_UA.md)

## ✨ Funcionalidades

- 🌈 Design empresarial de interface para aplicações web.
- 📦 Um conjunto de alta qualidade, componentes React prontos para uso.
- 🛡 Escrito em TypeScript com tipos previsíveis.
- ⚙️ Pacote completo de recursos de design e ferramentas de desenvolvimento.
- 🌍 Suporte de internacionalização para dezenas de idiomas.
- 🎨 Personalização poderosa do tema em todos os detalhes.

## 🖥 Suporte aos ambientes

- Navegadores modernos e Internet Explorer 11 (com polyfills)
- Renderização no lado do servidor (server-side)
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --- | --- | --- | --- | --- | --- |
| IE11, Edge | últimas 2 versões | últimas 2 versões | últimas 2 versões | últimas 2 versões | últimas 2 versões |

## 📦 Instalação

```bash
npm install @ezviz/ezd
```

```bash
yarn add @ezviz/ezd
```

## 🔨 Uso

```jsx
import { Button, DatePicker } from '@ezviz/ezd';

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker />
  </>
);
```

Importe o estilo manualmente:

```jsx
import '@ezviz/ezd/dist/@ezviz/ezd.css'; // ou '@ezviz/ezd/dist/@ezviz/ezd.less'
```

### TypeScript

Veja [Uso no Typescript](https://saastest3.ys7.com/ezd/docs/react/use-in-typescript-cn).

## 🌍 Internacionalização

Veja [i18n](https://saastest3.ys7.com/ezd/docs/react/i18n-cn).

## ⌨️ Desenvolvimento

Use Gitpod, um ambiente de desenvolvimento online para GitHub.

[![Abrir no Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ezviz-saas/ezviz-design-master)

Ou clone localmente:

```bash
$ git clone git@github.com:ezviz-saas/ezviz-design-master.git
$ cd ezviz-design-master
$ npm install
$ npm start
```

Abra seu navegador e visite http://127.0.0.1:8001