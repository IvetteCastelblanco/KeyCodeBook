const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')


const { conectDB } = require ('./db')
const app = express()

app.use(cors())
app.use(bodyParser.json())




conectDB()

require('./routers/user')(app)
require('./routers/genre')(app)

app.listen(3000, () =>{
    console.log('Se levanto el servidor.......')
})