var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const char = require('../Models/char_rol');

//configurations for router
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//end config

router.get('/search', function(req,res){
    const { query } = req.body; //query = { "query": {}, "limit": 0, "sort_by": "" }
    const _query = query["query"];
    char.find(_query, function(err, result){
        if (err){ res.status(500).json({ search: false, result: "Please contact support. Error information.", error: err })};
        res.status(200).json({ search: true, result: result });
    }); 
});

router.post('/create', function(req, res){
    const { char_id, char_base_stats, char_bio, char_anim_name } = req.body;
    if(char_id != "" && char_id != null){
        char.findOne({ char_id: char_id }, function(err, found){
            if (err){ res.status(500).json({ new_char: false, result: "Please contact support. Error information.", error: err })};
            if(found){ res.status(404).json({ new_char: false, result: "There is a char already using that char_id, please choose another one."})};
            if(!found){//we add the new one.
                char.create({ char_id: char_id, char_base_stats: char_base_stats, char_bio: char_bio, char_anim_name: char_anim_name }, function(err, newChar){
                    if (err){ res.status(500).json({ new_char: false, result: "Please contact support. Error information.", error: err })};
                    res.status(200).json({ new_char: true, result: newChar })
                });
            }
        });
    }else{
        res.status(200).json({ new_char: false, result: "Char Role Id Required!"});
    }
});

module.exports = router;