const path = require('path');
const replaceLib = require('@ant-design/tools/lib/replaceLib');
const getWebpackConfig = require('@ant-design/tools/lib/getWebpackConfig');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const { version } = require('../package.json');
const themeConfig = require('./themeConfig');

const { webpack } = getWebpackConfig;

const isDev = process.env.NODE_ENV === 'development';
const { EZD_THEME } = process.env;

function alertBabelConfig(rules) {
  rules.forEach(rule => {
    if (rule.loader && rule.loader === 'babel-loader') {
      if (rule.options.plugins.indexOf(replaceLib) === -1) {
        rule.options.plugins.push(replaceLib);
      }
      rule.options.plugins = rule.options.plugins.filter(
        plugin => !plugin.indexOf || plugin.indexOf('babel-plugin-add-module-exports') === -1,
      );
      // Add babel-plugin-add-react-displayname
      rule.options.plugins.push(require.resolve('babel-plugin-add-react-displayname'));
    } else if (rule.use) {
      alertBabelConfig(rule.use);
    }
  });
}

module.exports = {
  port: 8001,
  hash: true,
  source: {
    components: './components',
    docs: './docs',
    changelog: ['CHANGELOG.zh-CN.md', 'CHANGELOG.en-US.md'],
  },
  theme: EZD_THEME ? './site/theme/index-css-only.js' : './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  themeConfig,
  filePathMapper(filePath) {
    if (filePath === '/index.html') {
      return ['/index.html', '/index-cn.html'];
    }
    if (filePath.endsWith('/index.html')) {
      return [filePath, filePath.replace(/\/index\.html$/, '-cn/index.html')];
    }
    if (filePath !== '/404.html' && filePath !== '/index-cn.html') {
      return [filePath, filePath.replace(/\.html$/, '-cn.html')];
    }
    return filePath;
  },
  doraConfig: {
    verbose: true,
  },
  lessConfig: {
    javascriptEnabled: true,
    modifyVars: {
      'root-entry-name': EZD_THEME || 'variable',
    },
  },
  webpackConfig(config) {
    config.resolve.alias = {
      '@ezviz/ezd/es': path.join(process.cwd(), 'components'),
      '@ezviz/ezd/lib': path.join(process.cwd(), 'components'),
      '@ezviz/ezd': path.join(process.cwd(), 'site', 'ezd'),

      // Change @ezviz/ezd from `index.js` to `site/ezd.js` to remove deps of root style
      site: path.join(process.cwd(), 'site'),
      'react-router': 'react-router/umd/ReactRouter',
    };
    config.externals = {
      'react-router-dom': 'ReactRouterDOM',
    };

    if (isDev) {
      config.devtool = 'source-map';

      // Resolve use react hook fail when yarn link or npm link
      // https://github.com/webpack/webpack/issues/8607#issuecomment-453068938
      config.resolve.alias = {
        ...config.resolve.alias,
        'react/jsx-runtime': require.resolve('react/jsx-runtime'),
        react: require.resolve('react'),
      };
    } else if (process.env.ESBUILD) {
      // use esbuild
      config.optimization.minimizer = [
        new ESBuildMinifyPlugin({
          target: 'es2015',
          css: true,
        }),
      ];
    }

    alertBabelConfig(config.module.rules);

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        ezdReproduceVersion: JSON.stringify(version),
      }),
    );

    delete config.module.noParse;
    
     // Use dev mod to speed up site preview build
    // This is used for CI preview build in `preview-build.yml`
    if (process.env.SITE_ENV === 'development') {
      config.mode = 'development';
    }

    if (EZD_THEME) {
      config.mode = 'development';
      config.plugins.forEach(plugin => {
        if (plugin?.options?.filename?.includes?.('.css')) {
          delete plugin.options.chunkFilename;
          plugin.options.filename = `${EZD_THEME}.css`;
        }
      });

      // Remove preset target
      config.module.rules.forEach(rule => {
        if (rule.options?.presets?.[1]?.[0]?.includes('preset-env')) {
          delete rule.options.presets[1][1];
          delete rule.options.plugins;
        }
      });

      config.optimization.minimize = false;
      delete config.optimization.minimizer;

      config.externals = [
        /^rc-.*/,
        /^react.*/,
        /^@ant-design\/.*/,
        /^@babel\/.*/,
        /^@algolia\/.*/,
        /^@docsearch\/.*/,
        /autocomplete.js/,
        /docsearch.js/,
        /.*\.md/,
        /lodash/,
        /jquery/,
        /moment/,
        /core-js/,
        /jsonml/,
        /ramda/,
        /tinycolor/,
        /bisheng-plugin/,
      ];
    }
    return config;
  },

  devServerConfig: {
    public: process.env.DEV_HOST || 'localhost',
    disableHostCheck: !!process.env.DEV_HOST,
  },

  htmlTemplateExtraData: {
    isDev,
  },
};
