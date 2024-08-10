const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HotelSchema = new Schema({
    property_type:{
        type : String,
        required : true,
    },
    property_name:{
        type : String,
        required : true,
    },
    property_business_name:{
        type : String,
        required : true,
    },
    property_address:{
        type : String,
        required : true,
    },
    property_country:{
        type : String,
        required : true,
    },
    property_state:{
        type : String,
        required : true,
    },
    property_state:{
        type : String,
        required : true,
    },
    no_of_rooms:{
        type : Number,
        required : true,
    },
    rating:{
        type : Number,
        required : true,
    },
    landmark:{
        type : String,
        required : true,
    },
    image:{
        image:{
            type : String,
        },
        image_path:{
            type : String,
        }
    },
    price:{
        type : Number,
        required : true,
    },
})

module.exports = mongoose.model('hotel_list',HotelSchema)