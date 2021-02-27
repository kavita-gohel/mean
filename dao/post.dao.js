const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const daoFile = require('../controllers/post.controller.js');
const Post = require('../models/post.model.js');
const User = require('../models/user.model.js');

// const user = new User({_id:req.body._id});

    daoFile.add = (req) => {
        return new Promise((resolve, reject) => {
                // console.log("req.body.body.title",req.body.body.title);
                // console.log("req.body.body.type",req.body.body.type);
                // console.log("req.body.body.content",req.body.body.content);
                // console.log("req.body.val",req.body.val);
                const post = new Post({
                userid: req.body.val,
                title : req.body.body.title,
                type : req.body.body.type,
                content: req.body.body.content
                })
                post.save((err, data) => {
                if(err){
                    reject(err)
                }
                else if(data==null){
                    reject({status:404,"message":"error occur at insertion"})
                }
                else {
               // resolve({status:200,"message":"Add post successfully  ",data})
                User.updateOne({ _id: data.userid}, {$addToSet: {posts: data._id}}, {new: true}, 
                    function (err, docs) { 
                    if (err){ 
                        console.log(err) 
                    } 
                    else{ 
                        console.log("Updated Docs : ", docs); 
                    } 
                     })
                    resolve({status:200,"message":"Add post successfully  ",data})

                }
                })
        })
    }



    daoFile.getPost = (req) => {
        return new Promise((resolve, reject) => {
            
            Post.find({userid: req.params.userid})
            // .populate('userid', User)
            .populate('userid','email')  
            .exec((err,data)=>{
                if(err){    
                    reject(err)
                }
                else {
                    // console.log("data",data)
                    // console.log("userid=-->",this.userid)
                    resolve(data)
                }
             })
        })        

    }


    daoFile.updatePost = (req) => {

        return new Promise((resolve,reject) => {
            Post.findByIdAndUpdate(
                        req.params._id,
                        {
                            title: req.body.title, 
                            type: req.body.type,
                            content: req.body.content,
                        }, {new: true}
            )
            .exec((err,result)=>{
                console.log('updated post response',result);
                if(err){
                    reject({status:400,"message":"Bad Response Check Value And parameters"},err)
                }
                else{
                    
                    resolve(result)
                
                }
            })
    
        })
    
    }

    daoFile.deletePost = (req) => {
        return new Promise((resolve,reject) => {
            console.log("----delete----",req.params._id)
            
            Post.findByIdAndRemove(req.params._id)
                .exec((err,id)=>{
                if(err){
                    console.log("error",err)
                    reject("eroor",err)
                }
                // else if(id==null)
                // {
                //     resolve({"message":"user not found please check Id"})
                // }
                else
                {
                    console.log("deleted successfully   ")
                    resolve("User Sucessfully Deleted")
                }
           
                })
                })
    }



module.exports = daoFile

  