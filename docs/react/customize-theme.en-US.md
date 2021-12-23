---
order: 7
title: Customize Theme
---

EZ Design allows you to customize our design tokens to satisfy UI diversity from business or brand requirements, including primary color, border radius, border color, etc.

![customized themes](https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png)

## EZ Design Less variables

We are using [Less](http://lesscss.org/) as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.

There are some major variables below, all less variables could be found in [Default Variables](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less).

```less
@ezd-primary-color: #1890ff; // primary color for all components
@link-color: #1890ff; // link color
@success-color: #52c41a; // success state color
@warning-color: #faad14; // warning state color
@error-color: #f5222d; // error state color
@font-size-base: 14px; // major text font size
@heading-color: rgba(0, 0, 0, 0.85); // heading text color
@text-color: rgba(0, 0, 0, 0.65); // major text color
@text-color-secondary: rgba(0, 0, 0, 0.45); // secondary text color
@disabled-color: rgba(0, 0, 0, 0.25); // disable state color
@border-radius-base: 2px; // major border radius
@border-color-base: #d9d9d9; // major border color
@box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05); // major shadow for layers
```

Please report an issue if the existing list of variables is not enough for you.

## How to do it

We will use [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) provided by less.js to override the default values of the variables. We now introduce some popular way to do it depends on different workflow.

### Customize in webpack

We take a typical `webpack.config.js` file as example to customize its [less-loader](https://github.com/webpack-contrib/less-loader) options.

```diff
// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
+     options: {
+       lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
+         modifyVars: {
+           'primary-color': '#1DA57A',
+           'link-color': '#1DA57A',
+           'border-radius-base': '2px',
+         },
+         javascriptEnabled: true,
+       },
+     },
    }],
    // ...other rules
  }],
  // ...other config
}
```

Note:

1. Don't exclude `node_modules/@ezviz/ezd` when using less-loader.
2. `lessOptions` usage is supported at [less-loader@6.0.0](https://github.com/webpack-contrib/less-loader/releases/tag/v6.0.0).

### Customize in Umi

You can easily use [theme](https://umijs.org/config/#theme) field in `.umirc.ts` or [config/config.ts](https://github.com/ant-design/ant-design-pro/blob/v5/config/config.ts) file of your project root directory if you are using [Umi](http://umijs.org/), which could be an object or a javascript file path.

```js
"theme": {
  "ezd-primary-color": "#1DA57A",
},
```

Or just [a javascript file path](https://github.com/ant-design/ant-design-pro/blob/b7e7983661eb5e53dc807452e9653e93e74276d4/.webpackrc.js#L18):

```js
"theme": "./theme.js",
```

### Customize in create-react-app

Follow [Use in create-react-app](/docs/react/use-with-create-react-app).

### Customize in less file

Another approach to customize theme is creating a `less` file within variables to override `@ezviz/ezd.less`.

```css
@import '~@ezviz/ezd/lib/style/themes/default.less';
@import '~@ezviz/ezd/dist/@ezviz/ezd.less'; // Import ez design styles by less entry
@import 'your-theme-file.less'; // variables to override above
```

Note: This way will load the styles of all components, regardless of your demand, which cause `style` option of `babel-plugin-import` not working.

### Dynamic theme

Runtime update theme color please [ref this doc](/docs/react/customize-theme-variable).

## How to avoid modifying global styles?

Currently ez-design is designed as a whole experience and modify global styles (eg `body` etc). If you need to integrate ez-design as a part of an existing website, it's likely you want to prevent ez-design to override global styles.

While there's no canonical way to do it, you can take one of the following paths :

### Configure webpack to load an alternate less file and scope global styles

It's possible to configure webpack to load an alternate less file:

```ts
new webpack.NormalModuleReplacementPlugin( /node_modules\/@ezviz/ezd\/lib\/style\/index\.less/, path.resolve(rootDir, 'src/myStylesReplacement.less') )

#@ezviz/ezd { @import '~@ezviz/ezd/lib/style/core/index.less'; @import '~@ezviz/ezd/lib/style/themes/default.less'; }
```

Where the src/myStylesReplacement.less file loads the same files as the index.less file, but loads them within the scope of a top-level selector : the result is that all of the "global" styles are being applied with the #@ezviz/ezd scope.

### Use a postcss processor to scope all styles

See an example of usage with [gulp and postcss-prefixwrap](https://gist.github.com/sbusch/a90eafaf5a5b61c6d6172da6ff76ddaa).

## Not working?

You must import styles as less format. A common mistake would be importing multiple copied of styles that some of them are css format to override the less styles.

- If you import styles by specifying the `style` option of [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), change it from `'css'` to `true`, which will import the `less` version of @ezviz/ezd.
- If you import styles from `'@ezviz/ezd/dist/@ezviz/ezd.css'`, change it to `@ezviz/ezd/dist/@ezviz/ezd.less`.

## Official Themes 🌈

We have some official themes, try them out and give us some feedback!

- 🌑 Dark Theme
- 📦 Compact Theme

Method 1: using Umi 3

If you're using [Umi 3](http://umijs.org):

```js
// .umirc.ts or config/config.ts
export default {
  '@ezviz/ezd': {
    dark: true, // active dark theme
    compact: true, // active compact theme
  },
},
```

Method 2: Import [@ezviz/ezd/dist/@ezviz/ezd.dark.less](https://unpkg.com/browse/antd@4.x/dist/antd.dark.less) or [@ezviz/ezd/dist/@ezviz/ezd.compact.less](https://unpkg.com/browse/antd@4.x/dist/antd.compact.less) in the style file:

```less
@import '~@ezviz/ezd/dist/@ezviz/ezd.dark.less'; // Introduce the official dark less style entry file
@import '~@ezviz/ezd/dist/@ezviz/ezd.compact.less'; // Introduce the official compact less style entry file
```

If the project does not use Less, you can import [@ezviz/ezd.dark.css](https://unpkg.com/browse/antd@4.x/dist/antd.dark.css) or [@ezviz/ezd/dist/@ezviz/ezd.compact.css](https://unpkg.com/browse/antd@4.x/dist/antd.compact.css) in the CSS file:

```css
@import '~@ezviz/ezd/dist/@ezviz/ezd.dark.css';
@import '~@ezviz/ezd/dist/@ezviz/ezd.compact.css';
```

> Note that you don't need to import `@ezviz/ezd/dist/@ezviz/ezd.less` or `@ezviz/ezd/dist/@ezviz/ezd.css` anymore, please remove it, and remove babel-plugin-import `style` config too. You can't enable two or more theme at the same time by this method.

Method 3: using [less-loader](https://github.com/webpack-contrib/less-loader) in `webpack.config.js` to introduce as needed:

```diff
const { getThemeVariables } = require('@ezviz/ezd/dist/theme');

// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
+     options: {
+       lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
+         modifyVars: getThemeVariables({
+           dark: true, // Enable dark mode
+           compact: true, // Enable compact mode
+         }),
+         javascriptEnabled: true,
+       },
+     },
    }],
  }],
};
```
