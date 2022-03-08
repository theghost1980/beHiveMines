var mongoose = require('mongoose');
var user_char_schema = new mongoose.Schema({
    username: {
        type: String,
        index: true,
        required: true,
    },
    char_id: { //so we can use another collection just for the roles and each type has its base stats, pros and cons.
        type: String,
        index: true,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    }, //active or inactive
    char_name: String,
    char_equip: {
        main_hand: {
            type: Number,
            default: null, //if null it not allowed then we can use 0 as empty and != 0 as id item data
        }, 
        rod: {
            type: Number,
            default: null,
        }, 
        helmet: {
            type: Number,
            default: null,
        }, 
        armor: {
            type: Number,
            default: null,
        },
        tool: {
            type: String,
            default: null,
        }, 
        booster: {
            type: Number,
            default: null,
        },
    },
    char_stats:{ // this will be treated as: base_role_stats + char_stats.
        health: Number,
        energy: Number,
        position:{
            x: {
                type: Number,
                default: 0,
            },
            y: {
                type: Number,
                default: 0,
            },
        },
        located_at_scene: String,
        defense: Number,
        attack: Number,
        mining: Number,
        fishing: Number,
        mining_level: Number,
        mining_exp: Number,
        fishing_level: Number,
        fishing_exp: Number, 
    },
    char_anim_name: String,
    char_inventory: { type: Object }, //they will be assigned from the game on first run
    char_truck: { type: Object }, //idem
    pickaxe_generated: {
        type: Boolean,
        default: false,
    },
    created_at: Date,
});
mongoose.model('user_char', user_char_schema);

module.exports = mongoose.model('user_char');