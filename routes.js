const routes = module.exports = require('next-routes')();

routes
  .add('index', '/')
  .add('film', '/film/:id')
  .add('not-found', '/error');
