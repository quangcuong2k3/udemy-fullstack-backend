require('dotenv').config(); // thư viện để sử dụng process.env.
const express = require('express');//commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require("./routes/web")  //dat tên j cx dc 
const connection = require('./config/database')


//import express from 'express'
const app = express();//app express
const port = process.env.PORT || 8888;//co the thay doi port
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app)

//khai bao route 
app.use('/', webRoutes)


    (async () => {
        //test connection

        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend app listening on port ${port}`)
        })

    })()
