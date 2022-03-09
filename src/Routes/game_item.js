var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const game_item = require('../Models/game_item');

//configurations for router
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//end config

router.post('/search', function(req,res){
    //TODO ADD { limit, sortby }
    console.log(req.headers);
    console.log(req.body);
    if(req.body == null || req.body == {}){
        return res.status(500).json({
            search: false, result: "Cannot process empty!"
        });
    } 
    game_item.find(...req.body, function(err, result){
        if (err){ 
            res.status(500).json({ search: false, result: "Please contact support. Error information.", error: err })
        }else{
            res.status(200).json({ search: true, result: result });
        }
    });
});

module.exports = router;