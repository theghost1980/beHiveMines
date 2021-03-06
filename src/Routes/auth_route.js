var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const user = require('../Models/user');
const user_char = require('../Models/user_char');

//configurations for router
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//end config

router.get('/status', function(req, res){
    res.status(200).send({ "status": "OK"});
});

router.post('/login', function(req,res){
    //TODO JWT token check as a function so we can use it anywhere. returns auth = true or false
    console.log(req.headers);
    console.log(req.body);
    const { username, password } = req.body;
    // console.log("password: ", password);
    // console.log("username: ", username);
    user.findOne({ username: username, password: password}, function(err, result){
        if (err){
            res.status(500).json({ auth: false, result: "Please contact support. Internal server error. Take a screenshot.", error: err });
        };
        if (!result){
            res.status(404).json({ auth: false, result: "User not found. Please verify username and password." });
        }else{
            //look up on user_chars. maybe we could move this to a function later ono
            user_char.find({ username: username }, function(err, chars_found){
                if(err){ 
                    res.status(500).json({auth: false, result: "Please contact support. Error info.", error: err,});
                }
                else{ 
                    res.status(200).json({ auth: true, result: { user_data: result, chars: chars_found } });
                };
            });
        }
    });
});

router.post('/create_user', function(req,res){
    const { username, password, email} = req.body;
    console.log(req.body);
    if (username == null || password == null || email == null || username == "" || password == "" || email == ""){
        res.status(403).json({ auth: false, error: 'Please provide username, password and email.'});
    }else{
        user.findOne({ username: username }, function(err, result){
            if (err){
                res.status(500).json({ new_user: false, result: "Please contact support. Internal server error. Take a screenshot.", error: err });
            };
            if (!result){//create the user
                //TODO verify if valid email but from website & game, the user will enter only 'email'@''.com. 
                user.create({ username: username, password: password, email: email, created_at: new Date() }, function(err, resultNew){
                    if (err){
                        res.status(500).json({ new_user: false, result: err });
                    };
                    res.status(200).json({ new_user: true, result: resultNew });
                });
            }else{
                res.status(404).json({ new_user: false, result: 'User already exists. Please choose a different username.' });
            }
        });
    }
});

module.exports = router;