const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('../models/userModel');


const generateToken = (userId) => {
    console.log(userId, process.env.JWT_SECRET);
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

const login = async (req, res) => {
    // console.log(process.env)
    try {
        // debugger;
        const { email, password } = req.body;
        var user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            return res.status(501).json({ statusCode: 501, message: 'Invalid email or Password' })
        }

        const isPasswordValid = await bcrypt.compare(atob(password), user.password);
        console.log(isPasswordValid);
        if (!isPasswordValid) {
            return res.status(401).json({ statusCode: 401, message: 'invalid email or password' })
        }

        const token = generateToken(user._id);
        console.log(token);
        user = { ...user._doc, token };
        console.log(user);
        res.json({ statusCode: 200, data: user, message: 'Success' });


    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    login
}