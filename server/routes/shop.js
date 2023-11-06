const express = require("express")
const shopController = require("../controllers/shop.js")
const router = express.Router()
const auth = require("../middleware/auth.js")

router.get("/categories", shopController.getAllCategories)
router.get("/categories/:catId", shopController.getClinics)
router.get("/categories/:catId/book/:clinId", shopController.getBooking)

router.post("/categories/:catId/book/:clinId", auth, shopController.postBooking)
router.get("/bookings", auth, shopController.getBookings)

module.exports = router