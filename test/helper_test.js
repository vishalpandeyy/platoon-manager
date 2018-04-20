const mongoose = require('mongoose');

let uri = 'mongodb://twitterapp:vish@ds243805.mlab.com:43805/credentials';

mongoose.connect(uri);

mongoose.connection
  .once('open', () => 
    console.log('db connected.. !!'))

  .on('error', (err) => {
    console.warn('Warning', err);  
  });
