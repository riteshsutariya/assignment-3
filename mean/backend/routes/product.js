const express = require('express')
const app = express.Router()
const product = require('../models/product')

//get all products
app.get('/', async (req, res) => {
    try {
        const result = await product.find()
        res.status(200).json({
            data: result
        })
    } catch (error) {
        console.error('error get /product ', error);
        res.status(501).json({
            message: 'internal server error'
        })
    }
})

//get product by id
app.get('/:id', async (req, res) => {
    const p_id = req.params.id;
    try {
        const result = await product.findById(p_id)
        if (result) {
            res.status(200).send(
                {
                    data: result
                }
            )
        } else {
            res.status(404).send({
                message: 'product not found with given id!'
            })
        }
    } catch (error) {
        console.error('error get /product/:id ', error);
        res.status(501).json({
            response: {
                message: 'internal server error'
            }
        })
    }
})

//insert product
app.post('/', async (req, res) => {
    console.log(req);
    console.log(req.body)
    const newProduct = req.body;
    try {
        const productObj = new product({ ...newProduct })
        const result = await productObj.save()
        res.status(200).json({
            message: 'product inserted successfully.',
            data: result
        })
    } catch (error) {
        console.error('error post /product ', error);
        res.status(501).json({
            message: 'internal server error'
        })
    }
})

//update product
app.put('/:id', async (req, res) => {
    const p_id = req.params.id;
    const updatedProduct = req.body;
    try {
        const result = await product.findByIdAndUpdate(p_id, updatedProduct)
        if (result) {
            res.status(200).send({
                message: 'product updated successfully.',
                data: result
            })
        }
        else {
            res.status(404).send({
                data: 'something went wrong!'
            })
        }
    } catch (error) {
        console.error('error put /product/:id ', error);
        res.status(501).json({
            message: 'internal server error'
        })
    }
})

//delete product
app.delete('/:id', async (req, res) => {
    const p_id = req.params.id;
    try {
        const result = await product.findByIdAndDelete(p_id)
        if (result) {
            res.status(200).send({
                message: 'product deleted successfully.',
                data: result
            })
        } else {
            res.status(404).send({
                message: 'something went wrong!'
            })
        }
    } catch (error) {
        console.error('error delete /product/:id ', error);
        res.status(501).json({
            message: 'internal server error'
        })
    }
})

module.exports = app