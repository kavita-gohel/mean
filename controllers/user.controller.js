const User = require('../models/user.model.js');


exports.create = (req, res) => {
    console.log("create....",req.body);
    // if(!req.body.email) {
    //     return res.status(400).send({
    //         message: "Email can not be empty"
    //     });
    // }
    const user = new User({
        email: req.body.email, 
        fname: req.body.fname,
        lname: req.body.lname,
        mono: req.body.mono,
        gender: req.body.gender,
        hobby : req.body.hobby,

    });
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the new User."
        });
    });
};



exports.findAll = (req, res) => {
    console.log(User.find())
    User.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving user."
        });
    });
};


// exports.findOne = (req, res) => {

//     User.findById(req.params._id)
//     .then(user => {
//         if(!user) {
//             return res.status(404).send({
//                 message: "user not found with user-id " + req.params._id
//             });            
//         }
//         res.send(user);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "user not found with id " + req.params._id
//             });                
//         }
//         return res.status(500).send({
//             message: "Error retrieving user with id " + req.params._id
//         });
//     });
// };


exports.findOne = (req, res) => {

    User.find({fname : req.params.fname})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with user fname" + req.params.fname
            });   
            console.log("user not found");         
        }
        res.send(user);
    }).catch(err => {
        if(err.kind ===  "ObjectId") {
            return res.status(404).send({
                
                message: "user not found with fname " + req.params.fname
              
            });                
            console.log("ObjectId");
        }
        return res.status(500).send({
            message: "Error retrieving user with fname " + req.params.fname
        });
    });
};




exports.update = (req, res) => {
    console.log("update....",req.body);
 
    
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
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params._id
            });
        }
        user.save();
        res.send(user);
        
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params._id
        });
    });
};


// router.delete('/contact/:id', (req, res, next) => {
//     Contact.remove({_id: req.params.id}, function(err, result){
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json({msg: 'Contact deleted successfully'});
//         }
//     }); 
// });

    exports.delete = (req, res) => {
    // console.log("delete",req);
    User.deleteOne({_id: req.params.id}, function(err, result){
        if(err){
             res.json(err);
             }
               else{
                        res.json({msg: 'Contact deleted successfully'});
                    }
                }); 
     }
        
// exports.delete = (req, res) => {
//         User.findByIdAndRemove(req.params._id)
//     // User.deleteOne({_id :req.params._id})
//     //  User.find({_id :req.params._id}).remove()
//     .then(user => {
//         if(!user) {
//             return res.status(404).send({
//                 message: "user not found with id " + req.params._id
//             });
//         }
//         res.send({message: "User deleted successfully!"});
//     }).catch(err => {
//         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//             return res.status(404).send({
//                 message: "User not found with id " + req.params._id
//             });                
//         }
//         return res.status(500).send({
//             message: "Could not delete user with id " + req.params._id
//         });
//     });
// };

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