const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema ({
    plantName: {type: String, required: true},
    plantType: {type: String, required: true},
    price: {type: Number, required: true},
    img: {type: String, required: true},
})

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;