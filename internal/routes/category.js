const express = require('express')
const app = express.Router()
const _ = require('lodash')
const Category = require('../models/category')
//get all categories
app.get('/', async (req, res) => {
    try {
        const result = await Category.find();
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
//insert Category
app.post('/', async (req, res) => {
    const data = req.body;
    if (!_.isEmpty(data)) {
        try {
            const newRecord = new Category({ ...data })
            await newRecord.save()
            res.status(200).json({
                message: 'Category inserted successfully.'
            })
        } catch (error) {
            console.log(error)
            res.status(501).json({
                message: 'internal server error'
            })
        }
    } else {
        res.status(404).json({
            message: 'something went wrong!'
        })
    }
})
module.exports = app;