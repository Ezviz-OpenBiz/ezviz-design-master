---
order: 5
title: 在 TypeScript 中使用
---

使用 `create-react-app` 一步步地创建一个 TypeScript 项目，并引入 @ezviz/ezd。

> `@ezviz/ezd` 基于最新稳定版本的 TypeScript（`>=4.0.0`），请确保项目中使用匹配的版本。

---

## 安装和初始化

请确保电脑上已经安装了最新版的 [yarn](https://yarnpkg.com) 或者 [npm](https://www.npmjs.com/)。

使用 yarn 创建 [cra-template-typescript](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript) 项目。

```bash
$ yarn create react-app ezd-demo-ts --template typescript
```

如果你使用的是 npm（接下来我们都会用 yarn 作为例子，如果你习惯用 npm 也没问题）。

```bash
$ npx create-react-app ezd-demo-ts --template typescript
```

然后我们进入项目并启动。

```bash
$ cd ezd-demo-ts
$ yarn start
```

此时浏览器会访问 http://localhost:3000/ ，看到 `Welcome to React` 的界面就算成功了。

## 引入 @ezviz/ezd

```bash
$ yarn add @ezviz/ezd
```

修改 `src/App.tsx`，引入 ezd 的按钮组件。

```tsx
import React, { FC } from 'react';
import { Button } from '@ezviz/ezd';
import './App.css';

const App: FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```

修改 `src/App.css`，在文件顶部引入 ezd 的样式。

```css
@import '~@ezviz/ezd/dist/@ezviz/ezd.css';
```

重新启动 `yarn start`，现在你应该能看到页面上已经有了 @ezviz/ezd 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 create-react-app 的[官方文档](https://create-react-app.dev/docs/getting-started#creating-a-typescript-app)。

`@ezviz/ezd` 使用 TypeScript 书写并提供了完整的定义，你可以享受组件属性输入建议和定义检查的功能。

![](https://gw.alipayobjects.com/zos/antfincdn/26L5vPoLug/8d7da796-175e-40af-8eea-e7031ba09f9f.png)

> 注意不要安装 `@types/@ezviz/ezd`。
