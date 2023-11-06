const mongoose = require('mongoose')


// const dbUrl = (
//   'mongodb://' +
//   process.env.MONGO_USERNAME +
//   ':' +
//   process.env.MONGO_PASSWORD +
//   '@' +
//   process.env.MONGO_HOST +
//   ':' +
//   process.env.MONGO_PORT +
//   '/' +
//   process.env.MONGO_DB +
//   '?authSource=admin')

const dbUrl = ('mongodb://admin:password@db:27017/lengingforus?authSource=admin')

const connectDB = () =>
  mongoose.connect(dbUrl, {
    // strictPopulate: false
  })

module.exports = connectDB
