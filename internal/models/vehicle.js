const mongoose = require('mongoose')
const category = require('./category')
const vehicleSchema = new mongoose.Schema({
    v_brand: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    v_picture: String,
    v_price: Number,
    v_depreciation: Number,
    v_numberOfYears: Number,
    v_totalPrice: Number
})

const Vehicle = new mongoose.model('vehicle', vehicleSchema, 'vehicles')

module.exports = Vehicle