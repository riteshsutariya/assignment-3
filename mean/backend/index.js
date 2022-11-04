const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
//database
const database = require('./config/db')

//req body,json configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//cors
app.use(cors())

//product route
const productRoute = require('./routes/product')
const PORT = process.env.PORT;

app.use('/product', productRoute)

app.get('/', (req, res) => {
    res.status(200).json({ response: { message: 'api running.' } })
})

app.listen(PORT, () => {
    console.log(`api running on http://localhost:${PORT}`)
})