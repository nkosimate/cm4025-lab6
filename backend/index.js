import path from 'path'
import express from 'express'
import config from './config.js';
import userRoutes from './user.routes.js'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import authRoutes from './auth.routes.js'

var app = express();

var options = {
    index: "index.html"
  };

var dir = path.join(__dirname, '../login-frontend/build/');

app.use(express.static(dir, options));


const PORT = config.port;
const MONGOURI = config.mongoUri;

// database stuff
// Connection URL - you should set this with a configuration 
//   file that doesn't go in GitHub, though
const MONGODB_URI = "mongodb://127.0.0.1:27017";
mongoose.Promise = global.Promise
mongoose.connect(MONGODB_URI, { dbName: "users" })
mongoose.connection.on('error', err => {
  throw new Error(`unable to connect to database: ${MONGOURI}`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', userRoutes)
app.use('/', authRoutes)
// 404 page
app.use(function (req, res, next) {
    res.send('This page does not exist!')
});

// Authorisation error
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message})
    }else if (err) {
      res.status(400).json({"error" : err.name + ": " + err.message})
      console.log(err)
    }
  })


app.listen(PORT, function () {
    console.log('Listening on http://localhost:' + PORT + '/');
});

