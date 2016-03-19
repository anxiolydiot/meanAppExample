//require mods 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
var PORT = 3000;
//create express app
var app = express();

// Middleware for REST api

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS, api is public
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



//connect to mongodb
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open',function(){

  // loads models, assigned to  pass around app object allows for dependency injection into controllers
  app.models = require('./models/index');

  // register routes
  var routes = require('./routes');
  //iterate over routes, assigns value of controller in routes.js as fist argument of callback then assigns key(which is the route) to second argument
  _.each(routes, function(controller, route){
  //call controller pass in route and app. in controller we are passing back function that takes in app and route and returns middleware, because of this we call app.use and pass in to set up controller 
  app.use(route, controller(app,route));
  });


console.log('listening on port ' + PORT);
app.listen(PORT);
});
