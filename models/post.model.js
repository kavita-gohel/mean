const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    type: String,
    content: String,
    userid: [{ type: mongoose.Schema.Types.ObjectId, ref:'User' }]
    },
    {
    timestamps: true
    });
module.exports = mongoose.model('Post', postSchema, "posts");

