const mongoose = require('mongoose')
require('dotenv').config()

const mongoURI = `${process.env.MONGODB}`;

// Connect to MongoDB
const mongo_db = mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

module.exports = mongo_db
