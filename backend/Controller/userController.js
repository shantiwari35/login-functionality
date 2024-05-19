const User = require('../models/userModel');
const bcrypt = require('bcrypt');


const createUser = async (req, res) => {
    console.log(req)
    try {
        var { email,password } = req.body;
        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        password = await bcrypt.hash(password, salt);
        const user = new User({ email,password });
        console.log(user);

        await user.save();
        res.status(201).send('user added successfully');
    } catch (error) {

        console.error('Error creating user: ', error);
        res.status(500).send('Internal Server Error');
    }
};

// Get all students
const getAllUser = async (req, res) => {
    try {
        console.log(req)
        const users = await User.find();
        const totalCount = await User.find().countDocuments();
        console.log(users)
        res.send({ statusCode: 200, data: users, message: 'successful', totalCount: totalCount });
    } catch (error) {
        console.error('Error getting user:', error);
        res.status(500).send({ statusCode: 500, message: 'Internal Server Error' });

    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const getSingleUser = await User.findById(id);
        if (getSingleUser)
            res.send({ statusCode: 200, data: getSingleUser, message: 'User found!' });
        else
            res.send({ statusCode: 204, data: {}, message: 'User not found!' });

    } catch (error) {
        console.error('Error getting user:', error);
        res.send({ statusCode: 500, message: 'Internal Server Error' });

    }

}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { email,password } = req.body;
        await User.findByIdAndUpdate(id, { email,password });
        res.send({ statusCode: 200, message: 'User Updated successfully' });

    } catch (error) {
        console.error('Error getting user:', error);
        res.send({ statusCode: 500, message: 'Internal Server Error' });
    }

}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
       
        await User.findByIdAndDelete(id);
        res.send({ statusCode: 200, message: 'User deleted successfully' });

    } catch (error) {
        console.error('Error getting user:', error);
        res.send({ statusCode: 500, message: 'Internal Server Error' });
    }

}
module.exports = {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}