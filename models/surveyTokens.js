var mongoose = require('mongoose');

var  surveyTokensSchema = mongoose.Schema({

    firstName: {
        type : String,
        required: true
    },

    lastName: {
        type : String,
        required: true

    },
    email:{
        type:String,
        required: true
    },

    token:{
        type :String,
        required :true
    },
    studyBy:{
        type:String,
        required:true,
    },
    studyName:{
        type:String,
        required:true
    },
    taken:{
        type:Boolean,
        required:true,
        default : false,
    }
});

module.exports = mongoose.model('SurveyTokens', surveyTokensSchema);