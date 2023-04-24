const express = require('express');
const router = express.Router();

const db = require('./../../database/mongodb')

router.get('/', async (req, res) => {
    const cars = await db.getCars();

    res.send(cars);
});

router.get('/:id', async(req, res) => {
    const id = req.params.id;

    const car = await db.getCarById(id);

    res.send(car)
});

router.post('/', async(req,res) => {
    
})

module.exports = router