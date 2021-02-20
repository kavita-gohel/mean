const mongoose = require('mongoose');
const User = require('../models/user.model.js');
const daoFile = {};

    daoFile.create = (req) => {

        return new Promise((resolve,reject)=>{
            console.log("create pic....",req.body.photo);
            console.log("create....",req.body);
            const user = new User({
            email: req.body.email, 
            fname: req.body.fname,
            lname: req.body.lname,
            mono: req.body.mono,
            gender: req.body.gender,
            hobby : req.body.hobby,
            photo : req.body.photo
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
            resolve({status:200,"message":"Add data sucessfully  ","User : ":data})
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
                    reject({status:404,"message":"error occur at insertion"})
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
                    resolve({"message":"user not found please check Id"})
                }
                else
                {
                    resolve("User Sucessfully Deleted")
                }
           
                })
                })
    }


    daoFile.update = (req) => {
        return new Promise((resolve,reject) => {
            User.findByIdAndUpdate(
                        req.params._id,
                        {
                            email: req.body.email, 
                            fname: req.body.fname,
                            lname: req.body.lname,
                            mono: req.body.mono,
                            gender: req.body.gender,
                            hobby : req.body.hobby
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


