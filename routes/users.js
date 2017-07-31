const express = require('express');
const router = express.Router();
const data = require('../models/data');


router.get('/:id', function(req, res){
  let userData = data.findById(req.params.id);
  res.render('profile', userData);
})

module.exports = router;
