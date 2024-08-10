const express = require('express');
const HotelSchema = require('../Schema/HotelSchema');
const Cityschema = require('../Schema/Cityschema');
const hotelRoutes = express.Router();

hotelRoutes.get('/', async (req, res) => {
    try {
        const { name } = await Cityschema.find({_id : req.body.city});
        const hotel = await HotelSchema.find({ city: name })
        res.send({success:true, data: hotel})
    } catch (err) {
        res.status(404).json({ succcess: false ,data:[] });
    }
});



module.exports = hotelRoutes;