const express = require('express')
const app = express.Router()
const category = require('../models/category')
//get all categories
app.get('/', async (req, res) => {
    try {
        const result = await category.find();
        res.status(200).json({
            data: result
        })
    } catch (error) {
        console.log(error)
        res.status(501).json({
            message: 'internal server error'
        })
    }
})

module.exports = app;