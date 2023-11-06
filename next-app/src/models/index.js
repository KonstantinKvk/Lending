const connectDB = require('./db/connectDB')

const user = require('./entity/user')
const lending = require('./entity/lending')
const feedback = require('./entity/feedback')

module.exports = {
    connectDB,
    user,
    lending,
    feedback
}