var mongoose = require('mongoose');
var char_role_schema = new mongoose.Schema({
    char_id:{
        type: String,
        required: true,
        index: true,
    },
    char_base_stats: {
        attack: Number,
        defense: Number,
        health: Number,
        mining: Number,
        fishing: Number,
    },
    char_bio: {
        name: String,
        animation_name: String,
        motto: String,
        description: String,
    },
    char_anim_name: String, //to be used as bowlHair, curlyHair, etc... 
});
mongoose.model('char_rol', char_role_schema);

module.exports = mongoose.model('char_rol');