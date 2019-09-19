const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/resources', proxy({
    target: 'https://archive.cnx.org',
    changeOrigin: true,
  }));
};