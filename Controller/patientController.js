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
else if(Doc.type !='patient')
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
exports.ViewEnrolledStudies= function(req, res)
 {
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
    
 }
 

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


//Funtion To Fetch an Article


exports.fetchoneArticle= function(req,res){
    article_instance.findOne(  
        
        // query
        {item_id:req.body.id},
    
        
    
        // callback function
        (err, article) => {
            if (err) return res.status(200).send(err)
            if(article==null)
            return res.status(200).json(message='No Article With this id')
            else
            return res.status(200).json(article)
        }
    );
};


exports.submitSurvey = function(req,res){

    var surveyInstance  = new SurveyInstance({
      patientid:req.body.filledBy,
      need_blowNose:  req.body.value1,
    nasal_blockage:  req.body.value2,
    sneezing:  req.body.value3,
    runny_nose:  req.body.value4,
    cough:  req.body.value5,
    post_nasalDischarge:  req.body.value6,
    thick_nasalDischarge:  req.body.value7,
    ear_fullness:  req.body.value8,
    dizziness:  req.body.value9,
    ear_pain:  req.body.value10,
    facial_painPressure:  req.body.value11,
    decreased_sense_smellTast:  req.body.value12,
    difficulty_fallingAsleep:  req.body.value13,
    wake_atNight:  req.body.value14,
    lack_goodSleep:  req.body.value15,
    wakeup_tired:  req.body.value16,
    fatigue: req.body.value17,
    reduced_productivity: req.body.value18,
    reduced_concentration: req.body.value19,
    frustrated_restless_irritable: req.body.value20,
    sad:req.body.value21,
    embarrased: req.body.value22,
    importantDiseases: req.body.top5,
    studyBy: req.body.studyBy  
});

  surveyInstance.save(function (err) {
    if (err)
    return res.json(err);
    else
      return res.json('Added successfully');
    });
}