var mongoose = require('mongoose');
var game_item_schema = new mongoose.Schema({
    item_id:{ //so 0 will be reserved
        type: Number,
        required: true,
        index: true,
    },
    item_type:{
        type: String,
        required: true,
        index: true,
    },
    item_name: {
        type: String,
        required: true,
        default: "Ipsem Lorem Lorem Ipsem Lorem",
    },
    item_rarity: { //common, uncommon, rare, epic, legendary,
        type: String,
        required: true,
    },
    item_add_props: Boolean,
    item_props: [
        {
            prop_name: String, // attack, defesnse, etc.
        },
        {
            prop_type: String, //boolean, int, float.
        },
        {
            prop_value: String,
        }
    ],
});
mongoose.model('game_item', game_item_schema);

module.exports = mongoose.model('game_item');