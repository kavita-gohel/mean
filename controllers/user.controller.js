const express = require('express');
const multer = require('multer');
// var upload = multer({ dest: 'uploads/' });
const daoFile = require('../dao/user.dao');
const { findOneAndUpdate } = require('../models/user.model.js');
const User = require('../models/user.model.js');
const userController = {};

userController.create = (req, res) => {
    // console.log("upload function", req.file)
    daoFile.create(req)
            .then((data) => {
              return  res.send(data);
              
            })
            .catch((err) => {
                return res.send(err)
            })
  }

    userController.upload = (req, res) => {
    console.log("upload function", req.file)

    // // let upload = multer({ fileFilter: helpers.imageFilter }).single('photo');

        // upload(req, res , function(err){
        if (!req.file) {
                    console.log("No file received",res);
                    return res.send({
                      success: false
                    });
                
                  } else {
                    console.log('file received',req.file);
                    return (res.send(req.file));
                  }
        //  })
    }
    // userController.uploads = (req, res) => {
    //     console.log("upload function", req.files)
    
    //     // let upload = multer({ fileFilter: helpers.imageFilter }).single('photo');
    
    //     // upload(req, res , function(err){
    //         if (!req.files) {
    //                     console.log("No file received",res);
    //                     return res.send({
    //                       success: false
    //                     });
                    
    //                   } else {
    //                     console.log('file received',req.files);
    //                     return res.send(req.files);
    //                   }
    //     }
    


    // })
    // upload.single('photo' , function(err, file){
    //     if(err){
    //         console.log("error while upload new file", err);
    //     }else{
    //         console.log("file uploaded done", file);
    //     }
    // })
    // upload.single('photo'),(req, res) => {
    //     console.log("req..",req.body);
    //     if (!req.file) {
    //         console.log("No file received",res);
    //         return res.send({
    //           success: false
    //         });
        
    //       } else {
    //         console.log('file received',res);
    //         return res.send(req.file);
    //       }
    // }

    // .then((data) => {
    //     return  res.send(data);
    //   })
    //   .catch((err) => {
    //       return res.send(err)
    //   })
    // console.log(req.file('photo'));

// exports.create = (req, res) => {
//     console.log("create....",req.body);
//     if(!req.body.email) {
//         return res.status(400).send({
//             message: "Email can not be empty"
//         });
//     }
//     const user = new User({
//         email: req.body.email, 
//         fname: req.body.fname,
//         lname: req.body.lname,
//         mono: req.body.mono,
//         gender: req.body.gender,
//         hobby : req.body.hobby,

//     });
//     user.save()
//     .then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the new User."
//         });
//     });
// };

userController.findAll = (req, res) => {
   
    daoFile.find()
    .then(result => {
        return res.send(result)
    }).catch(err => {
        return res.send(err)
    })
}

// exports.findAll = (req, res) => {
//     console.log(User.find())
//     User.find()
//     .then(user => {
//         res.send(user);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving user."
//         });
//     });
// };


userController.findOne = (req, res) => {
    
    daoFile.findOne(req)
    .then((result)=>{
        console.log("get single user====>",result)
        return res.send(result)
    })
    .catch((err)=>{
        return res.send(err)
    })
}


// exports.findOne = (req, res) => {

//     User.find({fname : req.params.fname})
//     .then(user => {
//         if(!user) {
//             return res.status(404).send({
//                 message: "user not found with user fname" + req.params.fname
//             });   
//             console.log("user not found");         
//         }
//         res.send(user);
//     }).catch(err => {
//         if(err.kind ===  "ObjectId") {
//             return res.status(404).send({
                
//                 message: "user not found with fname " + req.params.fname
              
//             });                
//             console.log("ObjectId");
//         }
//         return res.status(500).send({
//             message: "Error retrieving user with fname " + req.params.fname
//         });
//     });
// };

userController.update = (req, res) => {
    daoFile.update(req)
    .then((result)=>{
        console.log("updated user====>",result)

        return res.send(result)
    })
    .catch((err)=>{
        return res.send(err)
    })

    // daoFile.find()
}


// exports.update = (req, res) => {
//     console.log("update....",req.body);
 
    
//     User.findByIdAndUpdate(
//         req.params._id,
//         {
//             email: req.body.email, 
//             fname: req.body.fname,
//             lname: req.body.lname,
//             mono: req.body.mono,
//             gender: req.body.gender,
//             hobby : req.body.hobby
//     }, {new: true}
//     )
//     .then(user => {
//         if(!user) {
//             return res.status(404).send({
//                 message: "user not found with id " + req.params._id
//             });
//         }
//         user.save();
//         res.send(user);
        
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "user not found with id " + req.params._id
//             });                
//         }
//         return res.status(500).send({
//             message: "Error updating user with id " + req.params._id
//         });
//     });
// };



userController.delete = (req, res) => {

    daoFile.deleteOne(req)
    .then((result)=>{
        return res.json(result)
    })
    .catch((err)=>{
        return res.json(err)
    })

    }


    //  exports.delete = (req, res) => {
    // // console.log("delete",req);
    // User.deleteOne({_id: req.params.id}, function(err, result){
    //     if(err){
    //          res.json(err);
    //          }
    //            else{
    //                     res.json({msg: 'Contact deleted successfully'});
    //                 }
    //             }); 
    //  }
        

// exports.delete = (req, res) => {
//     console.log(req.params.fname)
//     //User.find({fname :req.params.fname}).remove()
//     User.deleteOne({fname :req.params.fname})
//     .then(user => {
//         if(!user) {
//             return res.status(404).send({
//                 message: "user not found with fname " + req.params.fname
//             });
//         }
//         res.send({message: "User deleted successfully!"});
//     }).catch(err => {
//         console.log("Error catch block delete by name",err)
//         if(err.kind === 'ObjectId' || err.fname === 'NotFound') {
//             return res.status(404).send({
//                 message: "User not found with fname " + req.params.fname
//             });   

//         }
//         return res.status(500).send({
//             message: "Could not delete user with fname " + req.params.fname
//         });
//     });
// };

// module.exports=daoFile
module.exports = userController;