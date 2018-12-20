var express = require('express');
var router = express.Router();
var app=express();
var Controller= require('../Controller/doctorController');
router.post('/',Controller.loginandGetToken);
var varifyToken= require('../TokenVerify');
router.use(varifyToken);
/* GET users listing. */

router.post('/addStudy',Controller.CreateNewStudy);
router.post('/viewStudies',Controller.FetchAllStudies);
router.post('/addPatients',Controller.FetchAllStudies);
router.post('/viewAllPatients',Controller.FetchAllPatients);
router.post('/updateStudy',Controller.UpdateStudy);
router.post('/SaveToken',Controller.CreatePassCode);

module.exports = router;