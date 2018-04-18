'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LocationSchema = require('./mapItem')

var VehicleSchema = new Schema({
    id: {type: String, required: true},
    isLead: {type: Boolean, required: true}, 
    destination: [LocationSchema],
    firebaseInstanceId: {type: String, required: true}
  });

module.exports = VehicleSchema;



