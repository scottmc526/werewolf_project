var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

var Werewolf = function(){
  return knex('stories')
}

/* GET home page. */
router.get('/', function(req, res, next) {
  Werewolf().select().then(function(payload){
    res.json(payload);
  })
});

module.exports = router;
