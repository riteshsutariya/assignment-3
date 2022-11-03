const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    p_name: String,
    p_manufacturer: String,
    p_countryOfOrigin: String,
    p_price: Number,
    p_description: String
})

const productModel = new mongoose.model('product', productSchema, 'products')
module.exports = productModel