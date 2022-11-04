const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    c_name: String
})

const categoryModel = new mongoose.model('category', categorySchema, 'categories')
module.exports = categoryModel