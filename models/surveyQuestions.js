var mongoose = require('mongoose');

var surveyQuestionsSchema = mongoose.Schema({

    patientid: {
        type : String,
        required: true
    },

    need_blowNose: {
        type : String,
        required: false

    },

    nasal_blockage: {
        type: String,
        required: false
    },

    sneezing: {
        type : String,
        required: false
    },
    runny_nose: {
        type : String,
        required: false
    },
    cough: {
        type : String,
        required: false
    },
    post_nasalDischarge: {
        type : String,
        required: false
    },
    thick_nasalDischarge: {
        type : String,
        required: false
    },
    ear_fullness: {
        type : String,
        required: false
    },
    dizziness: {
        type : String,
        required: false
    },
    ear_pain: {
        type : String,
        required: false
    },
    facial_painPressure: {
        type : String,
        required: false
    },
    decreased_sense_smellTast: {
        type : String,
        required: false
    },
    difficulty_fallingAsleep: {
        type : String,
        required: false
    },
    wake_atNight: {
        type : String,
        required: false
    },    
    lack_goodSleep: {
        type : String,
        required: false
    },
    wakeup_tired: {
        type : String,
        required: false
    },
    fatigue: {
        type : String,
        required: false
    },
    reduced_productivity: {
        type : String,
        required: false
    },
    reduced_concentration: {
        type : String,
        required: false
    },
    frustrated_restless_irritable: {
        type : String,
        required: false
    },
    sad: {
        type : String,
        required: false
    },
    embarrased: {
        type : String,
        required: false
    },
    importantDiseases: {
        type : String,
        required: false
    },
    studyBy:{
        type: String,
        required : false
    }
});
 
module.exports = mongoose.model('surveyQuestions', surveyQuestionsSchema);