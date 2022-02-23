var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


//configurations for router
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//end config

router.get('/status', function(req, res){
    res.send('Server: OK');
});

module.exports = router;