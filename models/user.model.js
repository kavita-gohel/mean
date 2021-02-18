const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    mono: String,
    gender: String,
    hobby : Array
    }, 
    {
    timestamps: true
    });


module.exports = mongoose.model('User', UserSchema);