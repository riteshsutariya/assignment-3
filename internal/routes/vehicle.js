const express = require('express')
const app = express.Router();
const _ = require('lodash')
//multer-for file upload
const multer = require('multer');
const Category = require('../models/category');

const fs = require('fs')

const allowedMimeType = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
]

//file upload storage configuration
const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        if (fs.existsSync('./uploads')) {

        } else {
            fs.mkdirSync('./uploads')
        }
        return cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
    }
})

let upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (!allowedMimeType.includes(file.mimetype)) {
            return cb(new Error('invalid file type!'))
        }
        cb(null, true)
    },
    limits: { fileSize: 500000 }
}).single('v_picture')

//file upload middleware
function uploadFile(req, res, next) {
    upload(req, res, async (error) => {
        const categoryData = await Category.find();
        if (error instanceof MulterError) {
            console.log('multer error: ', error)
            return res.render('insert', { pictureError: error.message, categories: categoryData })
        } else if (error) {
            console.log('other error: ', error)

            return res.render('insert', { pictureError: error.message, categories: categoryData })
        }
        next()
    })
}

const Vehicle = require('../models/vehicle');
const { MulterError } = require('multer');
//get all Vehicles data
app.get('/', async (req, res) => {
    try {
        const result = await Vehicle.find().populate('category');
        //for API
        /*res.status(200).json({
            data: result
        })*/
        res.render('index', { data: result })
    } catch (error) {
        console.log(error)
        res.status(501).json({
            message: 'internal server error'
        })
    }
})

app.get('/insert', async (req, res) => {
    const categoryData = await Category.find();
    res.render('insert', { categories: categoryData })
})

app.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const result = await Vehicle.findById(id).populate('category');
        // const CategoryObj = await Category.findById(result.v_Category)
        res.status(200).json({
            data: result,
        })
    } catch (error) {
        console.log(error)
        res.status(501).json({
            message: 'internal server error'
        })
    }
})

//insert Vehicle
app.post('/', uploadFile, async (req, res) => {
    const VehicleObj = req.body;
    if (!_.isEmpty(VehicleObj)) {
        try {
            const newRecord = new Vehicle({ ...VehicleObj, v_picture: req.file.filename })
            await newRecord.save()
            res.redirect('/vehicle')
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