require('dotenv').config(); // thư viện để sử dụng process.env.
const express = require('express');//commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require("./routes/web"); //dat tên j cx dc 
const apiRoutes = require("./routes/api"); //dat tên j cx dc 
const fileUpload = require('express-fileupload');
const connection = require('./config/database');
const { MongoClient } = require('mongodb');

//import express from 'express'
const app = express();//app express
const port = process.env.PORT || 8888;//co the thay doi port
const hostname = process.env.HOST_NAME;

//config file upload
app.use(fileUpload());


//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app)

//khai bao route 
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);


(async () => {
    //test connection
    try {
        //using mongoose
        await connection();

        //using mongodb driver
        // Connection URL
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);

        // Database Name
        const dbName = process.env.DB_NAME;

        await client.connect();
        console.log('Connected successfully to server');

        const db = client.db(dbName);
        const collection = db.collection('customers');

        collection.insertOne(
            {
                "name": "Cuong ne",
                address:
                    [
                        {
                            id: 1,
                            province: "bd",
                            country: {
                                name: "vietnam",
                                code: 10000
                            }
                        },
                        {
                            id: 2,
                            province: "hn",
                            country: {
                                name: "vietnam",
                                code: 10000
                            }
                        }
                    ]

            }
        )

        app.listen(port, hostname, () => {
            console.log(`Backend app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>>error connect to DB:", error)
    }
})()
