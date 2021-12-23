/**
 * ZombieJ: Since we still need mainly maintain the `default.less`. Create a script that generate
 * `variable.less` from the `default.less`
 */

const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const folderPath = path.resolve(__dirname, '..', 'components', 'style', 'themes');
const targetPath = path.resolve(folderPath, 'variable.less');

const defaultContent = fse.readFileSync(path.resolve(folderPath, 'default.less'), 'utf8');

// const variableContent = fse.readFileSync(
//   path.resolve(__dirname, '..', 'components', 'style', 'themes', 'variable.less'),
//   'utf8',
// );

let variableContent = defaultContent;

function replaceVariable(key, value) {
  variableContent = variableContent.replace(new RegExp(`@${key}:[^;]*;`), `@${key}: ${value};`);
}

function replaceVariableContent(key, content) {
  const lines = variableContent.split(/\n/);
  const startIndex = lines.findIndex(line => line.includes(`[CSS-VARIABLE-REPLACE-BEGIN: ${key}]`));
  const endIndex = lines.findIndex(line => line.includes(`[CSS-VARIABLE-REPLACE-END: ${key}]`));

  if (startIndex !== -1 && endIndex !== -1) {
    variableContent = [...lines.slice(0, startIndex), content, ...lines.slice(endIndex + 1)].join(
      '\n',
    );
  }
}

replaceVariable('theme', 'variable');

replaceVariableContent(
  'html-variables',
  `
html {
  @base-primary: @blue-6;

  // ========= Primary Color =========
  --@{ezd-prefix}-primary-color: @base-primary;
  --@{ezd-prefix}-primary-color-hover: color(~\`colorPalette('@{base-primary}', 5) \`);
  --@{ezd-prefix}-primary-color-active: color(~\`colorPalette('@{base-primary}', 7) \`);
  --@{ezd-prefix}-primary-color-outline: fade(@base-primary, @outline-fade);

  // Legacy
  @legacy-primary-1: color(~\`colorPalette('@{base-primary}', 1) \`);

  --@{ezd-prefix}-primary-1: @legacy-primary-1;
  --@{ezd-prefix}-primary-2: color(~\`colorPalette('@{base-primary}', 2) \`);
  --@{ezd-prefix}-primary-3: color(~\`colorPalette('@{base-primary}', 3) \`);
  --@{ezd-prefix}-primary-4: color(~\`colorPalette('@{base-primary}', 4) \`);
  --@{ezd-prefix}-primary-5: color(~\`colorPalette('@{base-primary}', 5) \`);
  --@{ezd-prefix}-primary-6: @base-primary;
  --@{ezd-prefix}-primary-7: color(~\`colorPalette('@{base-primary}', 7) \`);

  // Deprecated
  --@{ezd-prefix}-primary-color-deprecated-pure: ~'';
  --@{ezd-prefix}-primary-color-deprecated-l-35: lighten(@base-primary, 35%);
  --@{ezd-prefix}-primary-color-deprecated-l-20: lighten(@base-primary, 20%);
  --@{ezd-prefix}-primary-color-deprecated-t-20: tint(@base-primary, 20%);
  --@{ezd-prefix}-primary-color-deprecated-t-50: tint(@base-primary, 50%);
  --@{ezd-prefix}-primary-color-deprecated-f-12: fade(@base-primary, 12%);
  --@{ezd-prefix}-primary-color-active-deprecated-f-30: fade(@legacy-primary-1, 30%);
  --@{ezd-prefix}-primary-color-active-deprecated-d-02: darken(@legacy-primary-1, 2%);

  // ========= Success Color =========
  --@{ezd-prefix}-success-color: @green-6;
  --@{ezd-prefix}-success-color-hover: color(~\`colorPalette('@{green-6}', 5) \`);
  --@{ezd-prefix}-success-color-active: color(~\`colorPalette('@{green-6}', 7) \`);
  --@{ezd-prefix}-success-color-outline: fade(@green-6, @outline-fade);
  --@{ezd-prefix}-success-color-deprecated-bg: ~\`colorPalette('@{green-6}', 1) \`;
  --@{ezd-prefix}-success-color-deprecated-border: ~\`colorPalette('@{green-6}', 3) \`;

  // ========== Error Color ==========
  --@{ezd-prefix}-error-color: @red-5;
  --@{ezd-prefix}-error-color-hover: color(~\`colorPalette('@{red-5}', 5) \`);
  --@{ezd-prefix}-error-color-active: color(~\`colorPalette('@{red-5}', 7) \`);
  --@{ezd-prefix}-error-color-outline: fade(@red-5, @outline-fade);
  --@{ezd-prefix}-error-color-deprecated-bg: ~\`colorPalette('@{red-5}', 1) \`;
  --@{ezd-prefix}-error-color-deprecated-border: ~\`colorPalette('@{red-5}', 3) \`;

  // ========= Warning Color =========
  --@{ezd-prefix}-warning-color: @gold-6;
  --@{ezd-prefix}-warning-color-hover: color(~\`colorPalette('@{gold-6}', 5) \`);
  --@{ezd-prefix}-warning-color-active: color(~\`colorPalette('@{gold-6}', 7) \`);
  --@{ezd-prefix}-warning-color-outline: fade(@gold-6, @outline-fade);
  --@{ezd-prefix}-warning-color-deprecated-bg: ~\`colorPalette('@{gold-6}', 1) \`;
  --@{ezd-prefix}-warning-color-deprecated-border: ~\`colorPalette('@{gold-6}', 3) \`;

  // ========== Info Color ===========
  --@{ezd-prefix}-info-color: @base-primary;
  --@{ezd-prefix}-info-color-deprecated-bg: ~\`colorPalette('@{base-primary}', 1) \`;
  --@{ezd-prefix}-info-color-deprecated-border: ~\`colorPalette('@{base-primary}', 3) \`;
}
`.trim(),
);

// >>> Primary
replaceVariable('primary-color', "~'var(--@{ezd-prefix}-primary-color)'");
replaceVariable('primary-color-hover', "~'var(--@{ezd-prefix}-primary-color-hover)'");
replaceVariable('primary-color-active', "~'var(--@{ezd-prefix}-primary-color-active)'");
replaceVariable('primary-color-outline', "~'var(--@{ezd-prefix}-primary-color-outline)'");

replaceVariable('processing-color', '@primary-color');

// >>> Info
replaceVariable('info-color', "~'var(--@{ezd-prefix}-info-color)'");
replaceVariable('info-color-deprecated-bg', "~'var(--@{ezd-prefix}-info-color-deprecated-bg)'");
replaceVariable(
  'info-color-deprecated-border',
  "~'var(--@{ezd-prefix}-info-color-deprecated-border)'",
);

// >>> Success
replaceVariable('success-color', "~'var(--@{ezd-prefix}-success-color)'");
replaceVariable('success-color-hover', "~'var(--@{ezd-prefix}-success-color-hover)'");
replaceVariable('success-color-active', "~'var(--@{ezd-prefix}-success-color-active)'");
replaceVariable('success-color-outline', "~'var(--@{ezd-prefix}-success-color-outline)'");
replaceVariable(
  'success-color-deprecated-bg',
  "~'var(--@{ezd-prefix}-success-color-deprecated-bg)'",
);
replaceVariable(
  'success-color-deprecated-border',
  "~'var(--@{ezd-prefix}-success-color-deprecated-border)'",
);

// >>> Warning
replaceVariable('warning-color', "~'var(--@{ezd-prefix}-warning-color)'");
replaceVariable('warning-color-hover', "~'var(--@{ezd-prefix}-warning-color-hover)'");
replaceVariable('warning-color-active', "~'var(--@{ezd-prefix}-warning-color-active)'");
replaceVariable('warning-color-outline', "~'var(--@{ezd-prefix}-warning-color-outline)'");
replaceVariable(
  'warning-color-deprecated-bg',
  "~'var(--@{ezd-prefix}-warning-color-deprecated-bg)'",
);
replaceVariable(
  'warning-color-deprecated-border',
  "~'var(--@{ezd-prefix}-warning-color-deprecated-border)'",
);

// >>> Error
replaceVariable('error-color', "~'var(--@{ezd-prefix}-error-color)'");
replaceVariable('error-color-hover', "~'var(--@{ezd-prefix}-error-color-hover)'");
replaceVariable('error-color-active', "~'var(--@{ezd-prefix}-error-color-active)'");
replaceVariable('error-color-outline', "~'var(--@{ezd-prefix}-error-color-outline)'");
replaceVariable('error-color-deprecated-bg', "~'var(--@{ezd-prefix}-error-color-deprecated-bg)'");
replaceVariable(
  'error-color-deprecated-border',
  "~'var(--@{ezd-prefix}-error-color-deprecated-border)'",
);

// >>> Primary Level Color
replaceVariable('primary-1', "~'var(--@{ezd-prefix}-primary-1)'");
replaceVariable('primary-2', "~'var(--@{ezd-prefix}-primary-2)'");
replaceVariable('primary-3', "~'var(--@{ezd-prefix}-primary-3)'");
replaceVariable('primary-4', "~'var(--@{ezd-prefix}-primary-4)'");
replaceVariable('primary-5', "~'var(--@{ezd-prefix}-primary-5)'");
replaceVariable('primary-6', "~'var(--@{ezd-prefix}-primary-6)'");
replaceVariable('primary-7', "~'var(--@{ezd-prefix}-primary-7)'");

// Link
replaceVariable('link-hover-color', '@primary-color-hover');
replaceVariable('link-active-color', '@primary-color-active');

replaceVariable(
  'table-selected-row-hover-bg',
  "~'var(--@{ezd-prefix}-primary-color-active-deprecated-d-02)'",
);

replaceVariable(
  'picker-basic-cell-hover-with-range-color',
  "~'var(--@{ezd-prefix}-primary-color-deprecated-l-35)'",
);
replaceVariable(
  'picker-date-hover-range-border-color',
  "~'var(--@{ezd-prefix}-primary-color-deprecated-l-20)'",
);

replaceVariable(
  'calendar-column-active-bg',
  "~'var(--@{ezd-prefix}-primary-color-active-deprecated-f-30)'",
);

replaceVariable(
  'slider-handle-color-focus',
  "~'var(--@{ezd-prefix}-primary-color-deprecated-t-20)'",
);
replaceVariable(
  'slider-handle-color-focus-shadow',
  "~'var(--@{ezd-prefix}-primary-color-deprecated-f-12)'",
);
replaceVariable(
  'slider-dot-border-color-active',
  "~'var(--@{ezd-prefix}-primary-color-deprecated-t-50)'",
);

replaceVariable(
  'transfer-item-selected-hover-bg',
  "~'var(--@{ezd-prefix}-primary-color-active-deprecated-d-02)'",
);

replaceVariable('alert-success-border-color', '@success-color-deprecated-border');
replaceVariable('alert-success-bg-color', '@success-color-deprecated-bg');
replaceVariable('alert-info-border-color', '@info-color-deprecated-border');
replaceVariable('alert-info-bg-color', '@info-color-deprecated-bg');
replaceVariable('alert-warning-border-color', '@warning-color-deprecated-border');
replaceVariable('alert-warning-bg-color', '@warning-color-deprecated-bg');
replaceVariable('alert-error-border-color', '@error-color-deprecated-border');
replaceVariable('alert-error-bg-color', '@error-color-deprecated-bg');

fse.writeFileSync(targetPath, variableContent, 'utf8');

// eslint-disable-next-line no-console
console.log(chalk.green('Success! Replaced path:'), targetPath);
