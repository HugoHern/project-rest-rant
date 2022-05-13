require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//use places.js
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render("home")
})

//wildcard route
app.get('*', (req, res) => {
    //page not found 
    res.render('error404')
})

app.listen(process.env.PORT)