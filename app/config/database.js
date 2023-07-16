const mongoose = require('mongoose');
const { database_url } = require('./index');

mongoose.connect(database_url, 
  { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const database = mongoose.connection;
module.exports = database;