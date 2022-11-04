const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    v_brand: String,
    v_category: String,
    v_picture: String,
    v_price: Number,
    v_depreciation: Number,
    v_numberOfYears: Number,
    v_totalPrice: Number
})

const vehicleModel = new mongoose.model('vehicle', vehicleSchema, 'vehicles')

module.exports = vehicleModel