require('dotenv').config();

module.exports = {
    'authEP': process.env.PRE_FIX_ALL_ROUTES + process.env.AUTH_ROUTE,
    'charEP': process.env.PRE_FIX_ALL_ROUTES + process.env.CHAR_ROUTE,
    'userCharEP': process.env.PRE_FIX_ALL_ROUTES + process.env.USER_CHAR_ROUTE,
    'gameItemEP': process.env.PRE_FIX_ALL_ROUTES + process.env.GAME_ITEM_ROUTE,
};