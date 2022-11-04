const express = require('express')
const app = express.Router();
const _ = require('lodash')
//multer-for file upload
const multer = require('multer')

const vehicle = require('../models/vehicle')
//get all vehicles data
app.get('/', async (req, res) => {
    try {
        const result = await vehicle.find();
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

//insert vehicle
app.post('/', async (req, res) => {
    const vehicleObj = req.body;
    console.log(vehicleObj)
    if (!_.isEmpty(vehicleObj)) {
        try {
            const newRecord = new vehicle({ ...vehicleObj })
            await newRecord.save()
            res.status(200).json({
                message: 'vehicle inserted successfully.'
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