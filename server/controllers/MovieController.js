
var Resource = require('resourcejs');
module.exports = function(app, route) {

  // Setup the controller for REST;
  Resource(app, '', route, app.models.movie).rest();

  // Return middleware for custom functionality per request
  return function(req, res, next) {
    next();
  };
};