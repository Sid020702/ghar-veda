const mongoose = require("mongoose")
const Schema = mongoose.Schema

const clinicSchema = new Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    imageUrl: { type: String, required: true },
    services: [
        {
            category: { type: mongoose.Types.ObjectId, ref: "Category", required: true },
            price: { type: Number, required: true },
            rating: { type: Number, required: true },
            reviews: { type: Number, required: true }
        }
    ]
})

module.exports = mongoose.model("Clinic", clinicSchema)