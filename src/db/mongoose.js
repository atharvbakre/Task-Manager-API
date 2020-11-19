// Load required module
const mongoose = require('mongoose')
require('dotenv').config()

// Connect to the Database
mongoose.connect(process.env.MONGODB_URL, {
    // Options set accordingly  
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})