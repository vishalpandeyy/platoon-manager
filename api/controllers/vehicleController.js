'use strict';

var mongoose = require('mongoose'),
  Vehicle = mongoose.model('Vehicles');

exports.list_all_platoonVehicles = function(req, res) {
    Vehicle.find({}, function(err, vehicle) {
    if (err)
      res.send(err);
    res.json(vehicle);
  });
};

exports.requestExit = function(req, res) {
    Vehicle.find({}, function(err, vehicle) {
    if (err)
      res.send(err);
    res.json(vehicle);
  });
};

exports.requestJoin = function(req, res) {
    Vehicle.find({}, function(err, vehicle) {
    if (err)
      res.send(err);
    res.json(vehicle);
  });
};

