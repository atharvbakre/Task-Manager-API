// Load all the required modules
const jwt = require('jsonwebtoken')
const Users = require('../models/user') 

// Middleware function gets executed before the function to which it is passed with, as second argument
const auth = async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '')
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const user = await Users.findOne({ _id: decode._id, 'tokens.token': token })

        if(!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    }catch (error) {
        res.status(400).send({ 'error': 'Please Authenticate'})
    }
}

module.exports = auth