const mongoose = require('mongoose');
// var bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    mono: String,
    gender: String,
    hobby : Array,
    photo: String,
    // posts: Array
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref:'Post' }]
    }, 
    {
    timestamps: true
    });

// const jwt = mongoose.Schema({
//     email: String,
//     password: String
//     },
//     {
//         timestamps: true
// })

// userSchema.statics.hashPassword = function hashPassword(password){
//     return bcrypt.hashSync(password,10);
// }

// userSchema.methods.isValid = function(hashedpassword){
//     return  bcrypt.compareSync(hashedpassword, this.password);
// }
module.exports = mongoose.model('User', userSchema);