const express = require('express');
const Cityschema = require('../Schema/Cityschema');
const cityRoutes = express.Router();

cityRoutes.get('/', async (req, res) => {
    try {
        const cities = await Cityschema.find();
        const modifiedCities = cities.map((city) => {
            const { _id, ...rest } = city.toObject({ versionKey: false });
            return { id: _id, ...rest };
        });
        res.json({data:modifiedCities});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = cityRoutes;
