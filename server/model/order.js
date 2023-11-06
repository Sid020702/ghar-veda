const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    category: { type: mongoose.Types.ObjectId, required: true, ref: "Category" },
    clinic: { type: mongoose.Types.ObjectId, required: true, ref: "Clinic" },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    ongoing: { type: Number, required: true },
    desc: { type: String },
    price: { type: Number, required: true },
    address: {
        line1: { type: String, required: true },
        line2: { type: String, required: true },
        line3: { type: String }
    },
    date: {
        day: { type: Number, required: true },
        date: { type: Number, required: true },
        month: { type: Number, required: true },
        year: { type: Number, required: true },
    },
    time: {
        hr: { type: Number, required: true },
        min: { type: Number, required: true },
        sec: { type: Number, required: true },
    },
    user: {
        email: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    }
})

module.exports = mongoose.model('Order', orderSchema)

