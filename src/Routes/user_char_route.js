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
    const { username, char_id, char_name, char_stats, char_inventory, char_truck, char_anim_name } = req.body;
    if(username == null || username == "" || char_id == null || char_id == "" || char_name == null || char_name == "" || char_stats == null || char_stats == "" || char_inventory == null || char_inventory == "" || char_anim_name == null || char_anim_name == ""){
        return res.status(200).json({
            new_user_char: false, result: "Fields needed, please check!"
        });
    }
    user_char.create({ username: username, char_id: char_id, char_name: char_name, char_stats: char_stats, char_inventory: char_inventory, char_truck: char_truck, char_anim_name: char_anim_name, created_at: Date.now() }, function(err, new_user_char){
        if (err){ 
            res.status(500).json({ new_user_char: false, result: "Please contact support. Error information.", error: err });
        }
        else{
            res.status(200).json({ new_user_char: true, result: new_user_char });
        }
    });
});

//U update a user_char
router.post('/update_char',function(req,res){
    if (req.headers['content-length'] == '0'){
        return res.status(500).json({ update_char: false, result: "Empty Params!"});
    }else{
        const { username, char_id } = req.headers;
        console.log(req.headers);
        if(username == null || username == "" || char_id == null || char_id == ""){
            return res.status(500).json({ update_char: false, result: "Empty Record!"});
        }else{
            console.log(req.body);
            user_char.findOneAndUpdate({ username: username, char_id: char_id }, req.body, { returnOriginal: false }, function(err, updated){
                if(err){
                    res.status(500).json({
                        update_char: false, result: "Error processing the update. Please contact support. Error info.", error: err,
                    });
                }else{
                    res.status(200).json({
                        update_char: true, result: "Updated", updated: updated,
                    })
                }
            });
        }
    }
});

module.exports = router;