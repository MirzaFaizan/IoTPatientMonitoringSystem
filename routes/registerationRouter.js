var express = require('express');
var router = express.Router();
var app=express();
var Controller= require('../Controller/signup');

router.post('/',Controller.CreatenewUser);

module.exports = router;