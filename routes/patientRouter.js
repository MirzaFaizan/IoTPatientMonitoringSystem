var express = require('express');
var router = express.Router();
var app=express();
var Controller= require('../Controller/patientController');
router.post('/',Controller.loginandGetToken);
var varifyToken= require('../TokenVerify');
router.use(varifyToken);
/* GET users listing. */

router.post('/viewReadings',Controller.ViewEnrolledStudies);

module.exports = router;