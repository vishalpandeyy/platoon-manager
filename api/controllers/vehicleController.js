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

// -------------------------------------- LEAD VEHICLE --------------------------------------- //

exports.respondToRequests = (req, res) => {
    // send notification to the lead vehicle 
    // parse lead's response
    // send accepted : true or false
    // if accepted : send platoon configuration
}

exports.acknowledge = (req, res) => {
    // update platoon configuration 
    // adjust geolocation by using last vehicle in the platoon for next vehicle to use.
    // use fcm to notify all connected vehicles
}

exports.syncDynamics = (req, res) => {
    // use fcm to update vehicle dynamics in the platoon
}

