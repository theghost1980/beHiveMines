var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const user = require('../Models/user');

//configurations for router
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//end config

router.get('/status', function(req, res){
    res.send('Server: OK');
});

router.post('/login', function(req,res){
    //TODO JWT token check as a function so we can use it anywhere. returns auth = true or false
    const { username, password } = req.body;
    user.findOne({ username: username, password: password}, function(err, result){
        if (err){
            res.status(500).send({ auth: false, error: err });
        };
        if (!result){
            res.status(404).send({ auth: false, result: result });
        }else{
            res.status(200).send({ auth: true, result: result });
        }
    });
});

module.exports = router;