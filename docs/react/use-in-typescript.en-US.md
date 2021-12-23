---
order: 5
title: Use in TypeScript
---

Let's create a TypeScript project by using `create-react-app`, then import `@ezviz/ezd` step by step.

> We build `@ezviz/ezd` based on latest stable version of TypeScript (`>=4.0.0`), please make sure your project dependency matches it.

---

## Install and Initialization

Ensure your system has installed latest version of [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/).

Create a new [cra-template-typescript](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript) project named `ezd-demo-ts` using yarn.

```bash
$ yarn create react-app ezd-demo-ts --template typescript
```

If you are using npm (we will use yarn in the following instructions, it's ok to replace yarn with npm)

```bash
$ npx create-react-app ezd-demo-ts --template typescript
```

Then we go inside `ezd-demo-ts` and start it.

```bash
$ cd ezd-demo-ts
$ yarn start
```

Open browser at http://localhost:3000/, it renders a header saying "Welcome to React" on the page.

## Import @ezviz/ezd

```bash
$ yarn add @ezviz/ezd
```

Modify `src/App.tsx`, import Button component from `@ezviz/ezd`.

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

Add `@ezviz/ezd/dist/@ezviz/ezd.css` at the top of `src/App.css`.

```css
@import '~@ezviz/ezd/dist/@ezviz/ezd.css';
```

OK, reboot with `yarn start`, you should now see a blue primary button displayed on the page. Next you can choose any components of `@ezviz/ezd` to develop your application. Visit other workflows of `create-react-app` at it's [User Guide](https://create-react-app.dev/docs/getting-started#creating-a-typescript-app).

`@ezviz/ezd` is written in TypeScript with complete definitions, try out and enjoy the property suggestion and typing check.

![](https://gw.alipayobjects.com/zos/antfincdn/26L5vPoLug/8d7da796-175e-40af-8eea-e7031ba09f9f.png)

> Don't install `@types/@ezviz/ezd`.
