const express = require('express');
const router = express.Router();
const data = require('../models/data');

router.get('/', function(req, res){
  res.render('index', { users: data.all });
});

module.exports = router;
