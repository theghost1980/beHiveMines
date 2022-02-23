var mongoose = require('mongoose');
var user_schema = new mongoose.Schema({
    username:{
        type: String,
        index: true,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    hive_account: String,
    banned: {
        type: Boolean,
        default: false,
    },
    ban_reason: String,
    full_name: String,
    avatar: String,
    email: {
        type: String,
        unique: true,
        index: true,
        verified:{
            type: Boolean,
            default: false,
            time_stamp: Date,
        },
    },
    user_type: String,
    created_at: Date,
    updated_at: Date,
});
mongoose.model('user', user_schema);

module.exports = mongoose.model('user');