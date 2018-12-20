var express= require('express'); 
var app= express();
var jwt    = require('jsonwebtoken');

///Connect to DataBasae
var mongoose = require('mongoose');
var config= require('../DBconfig');
mongoose.connect(config.database);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
(db.on('error', console.error.bind(console, 'MongoDB connection error:')));

var UserInstance = require('../models/user');
var StudyInstance = require('../models/study');
var SurveyInstance = require('../models/surveyQuestions');
var TokenInstance = require('../models/surveyTokens');
//Function To Login

exports.loginandGetToken = function(req, res)
 {
    UserInstance.findOne(  
        // query
        {email :req.body.email}, (err, Doc) => {
if (err) return res.status(200).send(err)
if(Doc==null)
{
   return res.status(200).json(message='Invalid Email')
}
else if(!Doc.validPassword(req.body.password))
{
   return res.send({msg:'password Invalid'});
}
else if(Doc.type !='doctor')
{
   return res.send({msg:'This user is not allowed to Access this Domain'});
}
else
{
   // res.send('login Successfull and token generated');
    //Generate JWT Token
    const payload = {
        name: req.body.name 
      };
          var token = jwt.sign(payload, config.secret, {expiresIn: 86400 // expires in 24 hours
        });
        
 //          return the information including token as JSON
        return res.json({
            success: true,
            message: 'logged in!!! Enjoy your token!',
            token: token,
            type: Doc.type,
            email : Doc.email
          });     
}
        });
};

//Function to Create new Article
exports.CreateNewStudy= function(req, res)
 {
    var studyInstance = new StudyInstance({
        name : req.body.title,
        date : req.body.date,
        patientsEnrolled : req.body.patients,
        inclusionCriteria : req.body.ic,
        exclusionCriteria : req.body.ec,
        treatmentProtocol : req.body.tp,
        studyInfo : req.body.info,
        studyBy : req.body.studyBy
    });
        
        //save new article
        studyInstance.save(function (err) {
        if (err)
        return res.json(err);
        else
          return res.json('Added successfully');
    });
 }
 //Delete A Article
 exports.DeleteArticle= function(req, res)
 {
    article_instance.deleteOne(  
        
        // query
        {item_id:req.body.id},
    
        //{Emp_name: true,Emp_cnic:true,Emp_type:true},
    
        // callback function
        (err, article) => {
            if (err) return res.status(200).send(err)
            if(article==null)
            return res.status(200).json(message='No Article With this id');
            else
            return res.status(200).json('Article deleted Successfully');
        }
    );
 }
 //Function to Fetch all Articles


 exports.FetchAllStudies= function(req,res){
    StudyInstance.find()

    .then(article => {
        if(article==null){ res.json({message:'No Article Found'})}
        else
        return res.json(article);
    }).catch(err => {
        return res.status(500).send({
            message: err.message || "Some error occurred while retrieving all Articles."
        });
    });
};


exports.CreatePassCode = function(req,res){

    tokenInstance = new TokenInstance({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        token:req.body.passcode,
        studyBy: req.body.studyBy,
        studyName:req.body.studyName,
    });

    tokenInstance.save(function (err) {
        if (err)
        return res.json(err);
        else
          return res.json('Added successfully');
    });


}



exports.FetchAllPatients= function(req,res){
    UserInstance.find({
        type:'patient'
    })

    .then(article => {
        if(article==null){ res.json({message:'No Article Found'})}
        else
        return res.json(article);
    }).catch(err => {
        return res.status(500).send({
            message: err.message || "Some error occurred while retrieving all Articles."
        });
    });
};


//update study
exports.UpdateStudy = function (req, res) {
    StudyInstance.findOneAndUpdate({name: req.body.name}, {$set:{patientsAdded:req.body.patients}}, {new: true}, (err, doc) => {
        if (err) return res.status(200).send(err)
        if(doc==null)
        return res.status(200).json(message='No study With this id')
        else
        return res.status(200).json(doc)
    });
}

