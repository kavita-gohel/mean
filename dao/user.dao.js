const mongoose = require('mongoose');
const daoFile = require('../controllers/user.controller.js');
const User = require('../models/user.model.js');
const jwt = require('jsonwebtoken');
const { ObjectID } = require('mongodb');

// const daoFile = {};

    daoFile.create = (req) => {
        const url = req.protocol + '://' + req.get('host')
        return new Promise((resolve,reject)=>{
            // console.log("create pic....",req.body.photo);
            console.log("create....",req.body);
            const user = new User({
            email: req.body.email, 
            fname: req.body.fname,
            lname: req.body.lname,
            mono: req.body.mono,
            gender: req.body.gender,
            hobby : req.body.hobby,
            photo : url + '/uploads/' + req.file.filename,
            password : req.body.password,
            // password: User.hashPassword(req.body.password)
            // photo: url+"/uploads/"+req.file.filename
           });
        user.save((err,data)=>{
        if(err){
            reject(err)
        }
        else if(data==null){
            reject({status:404,"message":"error occur at insertion"})
        }
        else {
            resolve({status:200,"message":"Add data sucessfully  ",user:data})
            
        }
        })
     })
   }

   daoFile.login =(req,res) => {
       return new Promise((resolve,reject) => {
        User.findOne({email:req.body.email}
            )
            .lean()
        .exec((err,data)=>{
        if(data){
            console.log(data)
            // if(data.isValid(req.body.password)){
            if(data.password == req.body.password){
                let token = jwt.sign({email:data.email},'secret', {expiresIn : '3h'});
                // console.log("token--->",token);
                // console.log("data--->",data);
                user = {
                    'token' : token,
                    'data': data,
                };
                console.log("psw-->",user.data.password);
                // delete user.data.password;
                resolve({status:200,"message":"Login Successful",user});
            }
            else{
                reject({status:501,"message":"Invalid Credential"})
            }
        }
        else{
            reject({status:501,"message":"Used Email is not registerd"},err)
        }
       })
     })
    }

    daoFile.find = (req) => {
        return new Promise((resolve, reject) => {
       
            User.find()
            .exec((err,data)=>{
                if(err){
                    reject(err)
                }
                else if(data==null){
                    reject({status:404,"message":"error occur at user get"})
                }
                else {
                    
                    resolve(data)
                }
             })
        })        

    }


    daoFile.findOne = (req) => {
        return new Promise((resolve,reject)=>{
            User.findById(req.params._id)
            .exec((err,id)=>{
                if(err){
                    reject(err)
                }
                else if(id==null){
                    reject({status:404,"message":"user not found Check Id"})
                }
                else{
                    resolve({status:200,"message":"user get sucessfully","user":id})
                }
            })
        })

    }

    daoFile.deleteOne = (req) => {
        return new Promise((resolve,reject) => {
            console.log("----delete----",req.params._id);
            User.findByIdAndDelete( req.params._id)
               .exec((err,id)=>{
                if(err){
                    reject(err)
                }
                else if(id==null)
                {
                    resolve({"message":"post not found please check Id"})
                }
                else
                {
                    resolve("Post Sucessfully Deleted")
                }
           
                })
                })
    }


    daoFile.update = (req) => {
        return new Promise((resolve,reject) => {
            // const url = req.protocol + '://' + req.get('host')
            User.findByIdAndUpdate(
                        req.params._id,
                        {
                            email: req.body.email, 
                            fname: req.body.fname,
                            lname: req.body.lname,
                            mono: req.body.mono,
                            gender: req.body.gender,
                            hobby : req.body.hobby,
                            password : req.body.password,
                            // photo: url + '/uploads/' + req.file.filename,
                            // password: User.hashPassword(req.body.password),
                    }, {new: true}
            )
            .exec((err,result)=>{
                console.log('update user response',result);
    
                if(err){
                    reject(err)
                }
                else if(result==null){
                    reject({status:400,"message":"Bad Response Check Value And parameters"})
                }
                else{
                    
                    resolve(result)
                    // daoFile.find()
                    // resolve({status:200,"message":"User Update Successfully","product":result})
                }
            })
    
        })
    
    }

module.exports = daoFile
