const express = require('express');
const router = express.Router();
const Plant = require('../models/plantModel');

// PLANTS INDEX
router.get('/', async (req,res) => {
    try {
        const plants = await Plant.find(); 
        res.send({
            success: true,
            data: plants
        })
    } catch (error) {
        res.send({
            success: false,
            data: error.message
        })
    }
})

// PLANTS CREATE
router.post('/', async (req,res) => {
    try {
        const newPlant = await Plant.create(req.body);
        res.send({
            success: true,
            data: newPlant
        })
    } catch (error) {
        res.send({
            success: false,
            data: error.message
        })
    }
})

// PLANTS SHOW
router.get('/:id', async (req,res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        console.log('hello');
        if(!plant) {
            throw new Error("Oops. Looks like there's no plant by this ID.")
        }
        res.send({
            success: true,
            data: plant
        })
    } catch (error) {
        res.send({
            success: false,
            data: error.message
        })
    }
})

// PLANTS UPDATE
router.put('/:id', async (req,res) => {
    try {
        const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send({
            success: true,
            data: plant
        })
    } catch (error) {
        res.send({
            success: false,
            data: error.message
        })
    }
})

// PLANTS DELETE
router.get('/:id', async (req,res) => {
    try {
        const plant = await Plant.findByIdAndDelete(req.params.id);
        res.send({
            success: true,
            data: plant
        })
    } catch (error) {
        res.send({
            success: false,
            data: error.message
        })
    }
})

module.exports = router;