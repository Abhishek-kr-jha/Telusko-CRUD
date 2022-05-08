const express = require('express');
const mongoose = require('mongoose');

const app = express()
const url = 'mongodb://localhost/AlienDBex'

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',()=>{
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('../CRUD/routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000,function(){
    console.log('server started')
})