const User = require('../models/users');

exports.getAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        if(err) {
            return res.status(500).json({message: err})
        }else {
            return res.status(200).json({message: 'Successful', data: users})
        }
    })
}

exports.createUser = (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, createdUser) => {
        if(err) {
            return res.status(500).json({message: 'Internal Server Error'})
        }else {
            return res.status(201).json({message: 'Successfully Created', data: createdUser})
        }
    })
}

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, {name: req.body.name}, (err, updatedUser) => {
        if(err){
            return res.status(500).json({message: 'Internal Server Error'})
        }
        else if(!updatedUser) {
            return res.status(404).json({message: 'User Not found'})
        }else {
            updatedUser.save((err, updated) => {
                if(err){
                    return res.status(500).json({message: 'Internal Server Error'})
                }else {
                    return res.status(200).json({message: 'User Updated Successfully'})
                }

            }) 
        }
    })
}

exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, deleted) => {
        if(err) {
            return res.status(500).json({message: err})
        }
        else if(!deleted) {
            return res.status(404).json({message: 'User not found'})
        }
        else {
            return res.status(200).json({message: 'User Deleted Successfully'})
        }
    })
}