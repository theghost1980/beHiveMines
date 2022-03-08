//This route is intended to handle user_chars in order to:
// add new char for a user.
// update char_stats, char_inv, char_truck.
// delete char: -> set active: false.
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const user_char = require('../Models/user_char');

//configurations for router
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//end config

//C create a new user_char
router.post('/create_char', function(req,res){
    const { username, char_id, char_name, char_stats, char_inventory, char_truck } = req.body;
    if(username == null || username == "" || char_id == null || char_id == "" || char_name == null || char_name == "" || char_stats == null || char_stats == "" || char_inventory == null || char_inventory == ""){
        return res.status(200).json({
            new_user_char: false, result: "Fields needed, please check!"
        });
    }
    user_char.create({ username: username, char_id: char_id, char_name: char_name, char_stats: char_stats, char_inventory: char_inventory, char_truck: char_truck, created_at: new Date() }, function(err, new_user_char){
        if (err){ 
            res.status(500).json({ new_user_char: false, result: "Please contact support. Error information.", error: err });
        }
        else{
            res.status(200).json({ new_user_char: true, result: new_user_char });
        }
    });
});

module.exports = router;