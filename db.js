const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = function () {

    let uri = 'mongodb://twitterapp:vish@ds243805.mlab.com:43805/credentials';
    mongoose.connect(uri);
      
    let db = mongoose.connection
      db.once('open', () => console.log('db connected.. !!'))
      db.on('error', (err) => {
        console.warn('Warning', err);
      })

      return db;
  }
  