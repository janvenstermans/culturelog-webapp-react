const express = require('express')
require('colors')
require('dotenv').config()
const port = process.env.SERVER_PORT || 3000
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json())

app.use('/api/experiences', require('./routes/experiencesRoutes'))
app.use('/api/types', require('./routes/typesRoutes'))
app.use('/api/media', require('./routes/mediaRoutes'))

app.use(errorHandler).listen(port, () => console.log('running on', port))