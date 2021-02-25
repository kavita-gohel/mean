const express = require('express');
const daoFile = require('../dao/post.dao');
const postController = {};
const Post = require('../models/post.model.js');

postController.add = (req, res) => {
        daoFile.add(req)
        .then((data) => {
          return  res.send(data);
          
        })
        .catch((err) => {
            return res.send(err)
        })
}

postController.getPost = (req, res) => {
    // console.log(req);
      daoFile.getPost(req)
      // console.log("req....",req)
      .then(result => {
          return res.send(result)
      }).catch(err => {
          return res.send(err)
      })
}

postController.updatePost = (req, res) => {
  daoFile.updatePost(req)
  .then((result)=>{
      console.log("updated post====>",result)

      return res.send(result)
  })
  .catch((err)=>{
      return res.send(err)
  })

  // daoFile.find()
}


postController.deletePost = (req, res) => {

  daoFile.deletePost(req)
  .then((result)=>{
      return res.json(result)
  })
  .catch((err)=>{
      return res.json(err)
  })

  }

// module.exports=daoFile;
module.exports = postController;