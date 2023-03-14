const express = require('express')
const cors= require('cors')
const app = express()
const port = 8000
const connectDB = require('./dbConnect')
connectDB()

app.use(cors())
app.use(express.json())
app.use('/api', require('./userRoutes'))
app.listen(port)    