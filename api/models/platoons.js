'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PlatoonSchema = new Schema({
  location: {
    name: {type: String, required: false } ,
    longitute: { type: String, required: true },
    latitude: { type: String, required: true}
  },
  size: Number,
  speed: Number,
  id: String,
  lead: String
});

module.exports = mongoose.model('Platoons', PlatoonSchema);



