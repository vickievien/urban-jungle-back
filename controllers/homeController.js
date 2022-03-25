const express = require('express');
const router = express.Router();
const Plant = require('../models/plantModel');

const mongoose = require("mongoose");
const db = mongoose.connection;

// PLANTS INDEX
router.get('/', (req,res) => {
    try {
        res.redirect('/plants');
        // res.send({
        //     success: true
        // })
    } catch (error) {
        res.send({
            success: false,
            data: error.message
        })
    }
})

module.exports = router;