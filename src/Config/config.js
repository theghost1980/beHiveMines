require('dotenv').config();

module.exports = {
    'authEP': process.env.PRE_FIX_ALL_ROUTES + process.env.AUTH_ROUTE,
    'charEP': process.env.PRE_FIX_ALL_ROUTES + process.env.CHAR_ROUTE,
    'userCharEP': process.PRE_FIX_ALL_ROUTES + process.env.USER_CHAR_ROUTE,
};