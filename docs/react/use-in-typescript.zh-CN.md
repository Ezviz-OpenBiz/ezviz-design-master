---
order: 5
title: 在 TypeScript 中使用
---

使用 `create-react-app` 一步步地创建一个 TypeScript 项目，并引入 @ezviz/evvd。

> `@ezviz/evvd` 基于最新稳定版本的 TypeScript（`>=4.0.0`），请确保项目中使用匹配的版本。

---

## 安装和初始化

请确保电脑上已经安装了最新版的 [yarn](https://yarnpkg.com) 或者 [npm](https://www.npmjs.com/)。

使用 yarn 创建 [cra-template-typescript](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript) 项目。

```bash
$ yarn create react-app evvd-demo-ts --template typescript
```

如果你使用的是 npm（接下来我们都会用 yarn 作为例子，如果你习惯用 npm 也没问题）。

```bash
$ npx create-react-app evvd-demo-ts --template typescript
```

然后我们进入项目并启动。

```bash
$ cd evvd-demo-ts
$ yarn start
```

此时浏览器会访问 http://localhost:3000/ ，看到 `Welcome to React` 的界面就算成功了。

## 引入 @ezviz/evvd

```bash
$ yarn add @ezviz/evvd
```

修改 `src/App.tsx`，引入 evvd 的按钮组件。

```tsx
import React, { FC } from 'react';
import { Button } from '@ezviz/evvd';
import './App.css';

const App: FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```

修改 `src/App.css`，在文件顶部引入 evvd 的样式。

```css
@import '~@ezviz/evvd/dist/@ezviz/evvd.css';
```

重新启动 `yarn start`，现在你应该能看到页面上已经有了 @ezviz/evvd 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 create-react-app 的[官方文档](https://create-react-app.dev/docs/getting-started#creating-a-typescript-app)。

`@ezviz/evvd` 使用 TypeScript 书写并提供了完整的定义，你可以享受组件属性输入建议和定义检查的功能。

![](https://gw.alipayobjects.com/zos/antfincdn/26L5vPoLug/8d7da796-175e-40af-8eea-e7031ba09f9f.png)

> 注意不要安装 `@types/@ezviz/evvd`。

## 高级配置

这个例子在实际开发中还有一些优化的空间，比如无法进行主题配置。

此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 [craco](https://github.com/gsoft-inc/craco) （一个对 create-react-app 进行自定义配置的社区解决方案）。

现在我们安装 craco 并修改 `package.json` 里的 `scripts` 属性。

```bash
$ yarn add @craco/craco
```

```diff
/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```

然后在项目根目录创建一个 `craco.config.js` 用于修改默认配置。

```js
/* craco.config.js */
module.exports = {
  // ...
};
```

### 自定义主题

按照 [配置主题](/docs/react/customize-theme) 的要求，自定义主题需要用到类似 [less-loader](https://github.com/webpack-contrib/less-loader/) 提供的 less 变量覆盖功能。

首先把 `src/App.css` 文件修改为 `src/App.less`，然后修改样式引用为 less 文件。

```diff
/* src/App.ts */
- import './App.css';
+ import './App.less';
```

```diff
/* src/App.less */
- @import '~@ezviz/evvd/dist/@ezviz/evvd.css';
```

然后安装 `craco-evvd` 并修改 `craco.config.js` 文件如下。

```bash
$ yarn add craco-antd
```

```js
const CracoEvvDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoEvvDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
        },
      },
    },
  ],
};
```

这里利用了 [less-loader](https://github.com/webpack/less-loader#less-options) 的 `modifyVars` 来进行主题配置，变量和其他配置方式可以参考 [配置主题](/docs/react/customize-theme) 文档。修改后重启 `yarn start`，如果看到一个绿色的按钮就说明配置成功了。

@ezviz/evvd 内建了深色主题和紧凑主题，你可以参照 [使用暗色主题和紧凑主题](/docs/react/customize-theme#使用暗色主题和紧凑主题) 进行接入。

> 同样，你可以使用 [react-app-rewired](https://github.com/timarney/react-app-rewired) 和 [customize-cra](https://github.com/arackaf/customize-cra) 来自定义 create-react-app 的 webpack 配置。