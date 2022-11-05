const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    c_name: String
})

const Category = new mongoose.model('category', categorySchema, 'categories')
module.exports = Category