require('dotenv').config();

module.exports = {
    'authEP': process.env.PRE_FIX_ALL_ROUTES + process.env.AUTH_ROUTE,
};