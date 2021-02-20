const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    mono: String,
    gender: String,
    hobby : Array,
    photo: String
    }, 
    {
    timestamps: true
    });


module.exports = mongoose.model('User', userSchema);