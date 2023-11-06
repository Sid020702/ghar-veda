const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require("../model/user")
exports.signup = (req, res) => {
    const { name, email, password, orders } = req.body;
    User.findOne({ email }).then(existingUser => {
        if (existingUser) {
            return res.status(404).json({ message: "User already exists." })
        }
        return bcrypt.hash(password, 12)
    }).then(hashedPassword => {
        return User.create({ name, email, password: hashedPassword, orders })
    }).then(newUser => {
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env["JWT_TOKEN"], { expiresIn: '1h' })
        res.status(200).json({ result: newUser, token })
    }).catch(err => {
        console.log(err)
    })


}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(404).json({ message: "User does not exist" })
        }
        const isPasswordCrt = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCrt) {
            return res.status(400).json({ message: "Invalid credentials" })
        }
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env["JWT_TOKEN"], { expiresIn: '1h' })
        res.status(200).json({ result: existingUser, token })
    } catch (error) {
        res.status(500).json({ error: "Something went wrong..." })

    }
}