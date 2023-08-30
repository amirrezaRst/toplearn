const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const ConnectDB = require('./config/db');
const path = require('path');


//! dotenv config
dotenv.config({ path: "./config/config.env" });

//! db config
ConnectDB();


const app = express().use(cors()).use(express.json());

//! static folder
app.use(express.static(path.join(__dirname, "public", "profile/")))




app.listen(process.env.PORT, err => {
    if (err) return console.log(err);
    console.log(`server running on ${process.env.NODE_ENV} mode in port ${process.env.PORT}`);
})