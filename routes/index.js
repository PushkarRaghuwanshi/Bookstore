var express = require('express');
var router = express.Router();

const BOOKS = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',);
});

router.get('/create', function(req, res, next) {
  res.render('create',);
});

router.post('/create', function(req, res, next) {
  BOOKS.push(req.body);
  // res.json(req.body);
  res.redirect('/readall')
});

router.get('/readall', function(req, res, next) {
  res.render('library',{books: BOOKS});
});

router.get('/about', function(req, res, next) {
  res.render('about',);
});

router.get('/delete/:index', function(req, res, next) {
  BOOKS.splice(req.params.index,1);
  res.redirect('/readall');
});

module.exports = router;