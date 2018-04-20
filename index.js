var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Platoon = require('./api/models/platoons'), //created model loading here
  bodyParser = require('body-parser'),
  PubSubFCM = require('./api/middleware/pubsub_messaging');
  
// mongoose instance connection url connection
require('./test/helper_test');

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(bodyParser.json());

  app.use(PubSubFCM);

  var routes = require('./api/routes/platoonRoutes'); //importing route

  routes(app); //register the route

  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found '})
  })

  app.listen(port);

  console.log('Platooning RESTful API server started on: ' + port);

  module.exports = app;