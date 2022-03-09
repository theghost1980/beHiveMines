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
    const { query } = req.body; //query = {"field": "value||expression"}
    console.log('Raw query: ', query);
    if(query == null || query == ""){
        return res.status(500).json({
            search: false, result: "Cannot process empty!"
        });
    }
    try {
        var _query = JSON.parse(query);
        console.log('Parsed query: ', _query);
        game_item.find({ ..._query }, function(err, result){
            if (err){ 
                res.status(500).json({ search: false, result: "Please contact support. Error information.", error: err })
            }else{
                res.status(200).json({ search: true, result: result });
            }
        });
    } catch (error) {
        res.status(500).json({
            search: false, result: "Error trying to parse data. Error info.", error: error,
        })
    } 
});

module.exports = router;