
const express = require('express')
const post = require('../controllers/post.controller.js');
const router = express.Router();
    
    router.post('/user/post',post.add);
    router.get('/user/viewPost/:userid', post.getPost);
    router.put('/user/editPost/:_id', post.updatePost);
    router.delete('/user/deletePost/:_id', post.deletePost);
module.exports = router;