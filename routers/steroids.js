var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/home', function(req, res) {
  res.send('Path: /home');
};

router.get('/badforyou', function(req, res) {
  res.send('Path: /badforyou');
};

router.get('/dondodrugs', function(req, res) {
  res.send('Path: /dondodrugs');
};

module.exports = router;
