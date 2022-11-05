const express = require('express')
const app = express.Router();
const _ = require('lodash')
//multer-for file upload
const multer = require('multer')

const Vehicle = require('../models/vehicle')
//get all Vehicles data
app.get('/', async (req, res) => {
    try {
        const result = await Vehicle.find().populate('category');

        // const CategoryObj = await Category.findById(result.v_Category)
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

app.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const result = await Vehicle.findById(id).populate('category');
        console.log("result: ", result)

        // const CategoryObj = await Category.findById(result.v_Category)
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

//insert Vehicle
app.post('/', async (req, res) => {
    const VehicleObj = req.body;
    console.log(VehicleObj)
    if (!_.isEmpty(VehicleObj)) {
        try {
            const newRecord = new Vehicle({ ...VehicleObj })
            await newRecord.save()
            res.status(200).json({
                message: 'Vehicle inserted successfully.'
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
module.exports = app