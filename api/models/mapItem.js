const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapItemSchema = Schema({
    name: String,
    location: {
        // It's important to define type within type field, because
        // mongoose use "type" to identify field's object type.
        type: {type: String, default: 'Point'},
        // Default value is needed. Mongoose pass an empty array to
        // array type by default, but it will fail MongoDB's pre-save
        // validation.
        coordinates: {type: [Number], default: [0, 0]}
    }
});
module.exports = mapItemSchema;

// MapItem.create({
//     name: 'Toronto',
//     location: {
//         type: 'Point',
//         // Place longitude first, then latitude
//         coordinate: [-79.3968307, 43.6656976]
//     }
// });