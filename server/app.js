const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const shopRoutes = require("./routes/shop.js")
const authRoutes = require("./routes/auth.js")
const dotenv = require("dotenv")
dotenv.config()

const MONGO_URI = process.env["MONGO_URI"]

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))



app.use("/shop", shopRoutes)
app.use("/auth", authRoutes)

mongoose.connect(MONGO_URI).then(result => {
    app.listen(80);
    console.log("Connected")
}).catch(err => { console.log(err) })
