// Load all required modules
const express = require('express')
require('./db/mongoose')
require('dotenv').config()
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

// Get the port number if deployed uses environment port number else default: 3000
const port = process.env.PORT

// To get the data in JSON format
app.use(express.json())

// Use the routes from the other files
app.use(userRouter)
app.use(taskRouter)

// Staet and listen on the required port number
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})