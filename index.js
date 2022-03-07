const { request, response } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
var db = require('./src/Config/db');
const config = require('./src/Config/config');

//use cors
app.use(cors());

var auth_route = require('./src/Routes/auth_route');
app.use(config.authEP, auth_route);
var char_route = require('./src/Routes/char_route');
app.use(config.charEP, char_route);
var user_char_route = require('./src/Routes/user_char_route');
app.use(config.userCharEP, user_char_route);
var game_item_route = require('./src/Routes/game_item');
app.use(config.gameItemEP, game_item_route);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
    console.log('Backend Server for Hive Mines RPG v1.0');
    console.log('Routes List.');
    console.log('Auth: ', config.authEP);
    console.log('Char: ', config.charEP);
    console.log('User Char: ', config.userCharEP);
    console.log('Game Items: ', config.gameItemEP);
});