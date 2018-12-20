const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const TokenInstance = require('../models/surveyTokens');

exports.CreatenewUser = function (req, res) {

    var user = new User({
        firstName : req.body.firstname,
        lastName : req.body.lastname,
        email : req.body.email,
        //password : user.generateHash(req.body.password),
        //password:req.body.password,
        type : req.body.type,
    });
    user.password = user.generateHash(req.body.password)
    user.save(function (err) {
        if (err)
            return res.json(err);
        else    
            res.send({
                message: "user created Successfully",
            });
        console.log("Data entered");
    });          
}



exports.ValidateToken = function(req,res){
  
    TokenInstance.findOne(  
        // query
        { token:req.body.token}, (err, Doc) => {
                if (err) return res.status(200).send(err)
                if(Doc==null)
                {
                return res.status(200).json(message='Invalid Token')
                }
                else if(Doc.taken===true){
                    return res.status(200).json(message='Expired')
                }
                else
                {
                    return res.json({
                    success: true,
                    message: 'valid',
                    fname : Doc.firstName,
                    lname : Doc.lastName,
                    studyBy :Doc.studyBy,
                    studyName : Doc.studyName
                });     
        }
        });
}

exports.ExpireToken = function(req,res){
    TokenInstance.findOneAndUpdate({token: req.body.token}, {$set:{taken:true}}, {new: true}, (err, doc) => {
        if (err) return res.status(200).send(err)
        if(doc==null)
        return res.status(200).json(message='No Token With this id')
        else
        return res.status(200).json(doc)
    });
}