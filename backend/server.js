// database stuff
// Connection URL - you should set this with a configuration 
//   file that doesn't go in GitHub, though
const MONGODB_URI = "mongodb://127.0.0.1:27017";
const mongoose = require('mongoose');
//import mongoose from 'mongoose';
mongoose.Promise = global.Promise
mongoose.connect(MONGODB_URI, { dbName: "users" })
mongoose.connection.on('error', err => {
  throw new Error(`unable to connect to database: ${MONGOURI}`)
})
