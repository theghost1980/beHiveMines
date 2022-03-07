var mongoose = require('mongoose');
var game_item_schema = new mongoose.Schema({
    id:{ 
        type: Number,
        required: true,
        index: true,
        unique: true,
    },
    type:{
        type: String,
        required: true,
        index: true,
    },
    subtype: {
        type: String,
        required: true,
        index: true,
    },
    equipmentslot: {
        type: String,
        default: null,
    },
    rarity: { //common, uncommon, rare, epic, legendary,
        type: String,
        required: true,
    },
    stackable: Boolean,
    quantity: Number,
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    addprop: Boolean,
    propname: String, // attack, defesnse, etc.
    proptype: String, //boolean, int, float.
    propvalue: {
        type: Number,
        default: null,
    },
});
mongoose.model('game_item', game_item_schema);

module.exports = mongoose.model('game_item');