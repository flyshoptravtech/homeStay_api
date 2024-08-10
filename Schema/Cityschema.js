const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    state_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('City', CitySchema);
