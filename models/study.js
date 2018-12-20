var mongoose = require('mongoose');

var studySchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true

    },

    patientsEnrolled: {
        type: String,
        required: false
    },

    inclusionCriteria: {
        type: String,
        required: true
    },

    exclusionCriteria: {
        type: String,
        required: true
    },

    treatmentProtocol: {
        type: String,
        required: true
    },
    studyInfo: {
        type: String,
        required: true
    },

    studyBy: {
        type: String,
        required: true
    },

    patientsAdded: {
        type: Array,
        required: false
    },

});

module.exports = mongoose.model('Study', studySchema);