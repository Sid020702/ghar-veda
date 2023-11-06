const Category = require("../model/category.js")
const Clinic = require("../model/clinic.js")
const Order = require("../model/order.js")
const mongoose = require("mongoose")

exports.getAllCategories = (req, res, next) => {
    Category.find().then((result) => {
        res.status(200).json(result)
    }).catch(err => { console.log(err) })
}

exports.getClinics = (req, res, next) => {
    const catId = req.params.catId
    let catName
    const arr = []
    Category.find({ _id: catId }).then((result) => {
        cat = result[0]
        return Clinic.find()
    }).then((result) => {
        result.map(clinic => {
            filteredArr = clinic.services.filter(service => (service.category.toString() === catId.toString()))
            clinic.services = filteredArr
            arr.push(clinic)
        })
        res.status(200).json({ clinics: arr, category: cat })
    }).catch(err => {
        console.log(err)
    })
}

exports.getBooking = (req, res, next) => {
    const { catId, clinId } = req.params
    console.log(catId)
    console.log(clinId)
}

exports.postBooking = (req, res, next) => {
    const { clinId, catId } = req.params
    const { age, gender, ongoing, desc, time, price, address, date } = req.body
    const order = new Order({
        clinic: new mongoose.Types.ObjectId(clinId),
        category: new mongoose.Types.ObjectId(catId),
        age: age,
        gender: gender,
        ongoing: ongoing,
        desc: desc,
        price: price,
        address: {
            line1: address.line1,
            line2: address.line2,
            line3: address.line3,
        },
        date: {
            day: date.day,
            date: date.date,
            month: date.month,
            year: date.year
        },
        time: {
            hr: time.hr,
            min: time.min,
            sec: time.sec,

        },
        user: {
            email: req.email,
            userId: req.userId
        }
    })
    order.save(order).then(result => {
        res.status(200).json({ message: "Order Placed Successfully" })
    }).catch(err => {
        console.log(err)
    })

}

exports.getBookings = (req, res, next) => {
    Order.find({ "user.userId": req.userId }, { user: 0 }).populate("category").populate("clinic").then(result => {
        res.status(200).json({ orders: result })
    })
}