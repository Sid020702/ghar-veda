const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    resetToken: String,
    resetTokenExpiration: Date,
    orders: [
        {
            orderId: { type: mongoose.Types.ObjectId, required: true, ref: "order" },
            confirmed: { type: Boolean, required: true },
            orderedAt: { type: Date, default: Date.now }
        }
    ]
})

module.exports = mongoose.model("User", userSchema)

