'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleSchema = require('./vehicle')
const LocationSchema = require('./mapItem')

var PlatoonSchema = new Schema({
  location: LocationSchema,
  vehicles: [VehicleSchema],
  size: Number,
  speed: Number,
  id: String,
  lead: String
});


module.exports = mongoose.model('Platoons', PlatoonSchema);



