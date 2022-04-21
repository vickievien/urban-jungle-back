const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema ({
    plantType: {type: String, required: true},
    plantName: String,
    price: {type: Number, required: true},
    img: {type: String, required: true},
    description: String,
    email: {type: String, required: true},
    maintenance: String,
    lightType: String,
    lightLevel: String,
    location: String
}, {timestamps: true})

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;