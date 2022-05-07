require('dotenv').config()

const express = require('express')
const app = express()

//use places.js
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send("hello world!")
})

//wildcard route
app.get('*', (req, res) => {
    //page not found 
    res.status(404).send('<h1>404 page</h1>')
})

app.listen(process.env.PORT)