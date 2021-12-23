const ezd = require('./components');

const req = require.context('./components', true, /^\.\/locale\/.+_.+\.tsx$/);

ezd.locales = {};

req.keys().forEach(mod => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  ezd.locales[matches[1]] = req(mod).default;
});

module.exports = ezd;
