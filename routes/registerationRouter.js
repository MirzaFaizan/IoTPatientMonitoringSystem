var express = require('express');
var router = express.Router();
var app=express();
var Controller= require('../Controller/signup');

router.post('/',Controller.CreatenewUser);
router.post('/Verify',Controller.ValidateToken);
router.post('/ExpireToken',Controller.ExpireToken);

module.exports = router;