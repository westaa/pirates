var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var jwt = require('jsonwebtoken');
require('dotenv').config();
/* GET home page. */
//
router.get('/api/pirates', function(req,res,next){
  knex('pirates').then(function(data){
    res.json(data);
  })
})

router.post('/api/pirates', function(req, res, next){
  knex('pirates').insert(req.body, 'id').then(function(data){
    res.redirect('/');
  });
})

router.get('/:id/delete', function(req, res, next){
  knex('pirates').where('id', req.params.id).delete().then(function(){
    res.redirect('/');
  });
})

router.get('/api/pirates/:id', function (req, res, next) {
  knex('pirates').where('id', req.params.id).then(function(data){
    res.json(data);
  })
})

router.post('/api/pirates/:id', function(req,res,next){
  knex('pirates').where('id', req.params.id).update(req.body).then(function(){
    res.redirect('/')
  })
})


module.exports = router;
