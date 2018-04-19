'use strict';

var mongoose = require('mongoose'),
  Platoon = mongoose.model('Platoons');

exports.list_all_platoons = function(req, res) {
  Platoon.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_a_platoon = function(req, res) {

  // 

  var new_platoon = new Platoon(req.body);
  new_platoon.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_platoon = function(req, res) {
  Platoon.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_platoon = function(req, res) {
  Platoon.findOneAndUpdate({_id: req.params.platoonId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(platoon);
  });
};


exports.delete_a_platoon = function(req, res) {

  Platoon.remove({
    _id: req.params.taskId
  }, function(err, platoon) {
    if (err)
      res.send(err);
    res.json({ message: 'Platoon successfully deleted' });
  });
};

exports.nearbyPlatoons = (req, res) => {
  // search nearby platoons by location
  res.json(req.body);
  // return all platoons
  // Platoon.find({}, function(err, task) {
  //   if (err)
  //     res.send(err);
  //   res.json(req.body);
  // });

}

exports.addVehicleToPlatoon = (req, res) => {
  // get the id of the platoon
  // send notification to the lead of the platoon
  // update the platoon configuration in mongodb 
}

exports.syncDynamics = (req, res) => {

}

exports.addVehicleToPlatoon = (req, res) => {

}

