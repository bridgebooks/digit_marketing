'use strict';

//load environment config
require('dotenv').config();

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./server/routes/index')
 
let app = express()

//set server port
app.set('port', process.env.PORT || 8000)

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//set static folder
app.use(express.static(path.resolve(__dirname, './public')))

//set folder for views
app.set('views', './server/views')

//set template engine
app.set('view engine', 'pug')

//set router
app.use(router)

app.listen(app.get('port'), () => {
    console.log('Listening on port %d', app.get('port'))
})