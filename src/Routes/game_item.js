var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const game_item = require('../Models/game_item');

//configurations for router
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//end config

router.post('/search', function(req,res){
    const { query } = req.body; //query = { "query": {}, "limit": 0, "sort_by": "" }
    //TODO limit & sort_by
    const _query = query["query"];
    game_item.find({ ..._query }, function(err, result){
        if (err){ 
            res.status(500).json({ search: false, result: "Please contact support. Error information.", error: err })
        }else{
            res.status(200).json({ search: true, result: result });
        }
    }); 
});

module.exports = router;