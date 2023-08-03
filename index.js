const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("/public"))



app.get('/', (req, res) => res.send('Hello World!'))



app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
})
   
     
    