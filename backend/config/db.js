const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        console.log('start connecting to db, wait for success or err message')
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`db connected to ${conn.connection.host}`.green.underline)
    } catch (err) {
        console.log('cannot connect to database', err)
        process.exit(1)
    }
}

module.exports = connectDB