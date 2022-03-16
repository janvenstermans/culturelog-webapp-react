const express = require('express')
require('dotenv').config()
const port = process.env.SERVER_PORT || 3000
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express()

app.use(express.json())

app.use('/api/experiences', require('./routes/experiencesRoutes'))

app.use(errorHandler).listen(port, () => console.log('running on', port))