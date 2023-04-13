const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||
              process.env.MONGO_HOST ||
              'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017')+'/mydb/'
  }
  
//module.exports = config; // This is the not-ES6 notation
export default config; // This is the ES6 notation – use this after next section
