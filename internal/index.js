const express = require('express')
require('dotenv').config();
//database
const db = require('./config/db')
const app = express();
const PORT = process.env.PORT || 8000;

//routes
const categoryRoute = require('./routes/category')
const vehicleRoute = require('./routes/vehicle')

//body parser configuration
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//setting view
app.set('view', 'ejs')

//setting routes
app.use('/category', categoryRoute)
app.use('/vehicle', vehicleRoute)

app.get('/', (req, res) => {
    res.send('default')
})

app.listen(PORT, () => {
    console.log(`app running on http://localhost:${PORT}`)
})