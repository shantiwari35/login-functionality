const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, require: true },
});

const user = mongoose.model('User',userSchema);

module.exports=user;