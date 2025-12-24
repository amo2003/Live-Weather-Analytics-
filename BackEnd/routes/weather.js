const express = require('express');
const router = express.Router();
const { getWeatherData } = require('../services/weatherServices');

router.get('/', async (req, res) => {
    try{
        const data = await getWeatherData();
        res.json(data);
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'servr Error'});
    }
});

module.exports = router;