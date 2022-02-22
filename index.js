const { request, response } = require('express');
const express = require('express');
const app = express();

/// TODO LIST BE
/// 1. Add MongoDB.
/// 2. 

let people = [
    {
        name: "Hannah Rickard",
        number: "06-51-99-56-83",
        id: 1
      },
      {
        name: "Hyun Namkoong",
        number: "10987654",
        id: 2
      },
      {
        name: "Courtney Martinez",
        number: "3691215",
        id: 3
      },
];

app.get('/', (request, response) => {
    response.send('<h1>Phonebook</h1>');
});

app.get('/api/people', (request, response) => {
    response.json(people);
});

app.get('/api/getdbitems', (request, response) => {
    response.json({
        "status": "ok", 
        "data": {
            "item_data": item_data,
            "player_inv": player_inv_initial,
            "player_truck": player_truck_initial,
        },
    });
});

app.get('/api/test', (request, response) => {
    response.json({
        "status": "on",
        "info": "hive_mines backend server 1.0",
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

//TODO: replace this with the DB readings from mongoDB.
//needed vars
const item_data = [
    {
        "id": 0,
        "type": "weapon",
        "equipmentslot": "main_hand",
        "rarity": "common",
        "stackable": false,
        "quantity": 1,
        "name": "Wooden Sword",
        "textureiconid": 0,
        "addpropplayer": true,
        "propname": "attack",
        "proptype": "int",
        "propvalue": 1
    },
    {
        "id": 1,
        "type": "resource",
        "equipmentslot": "null",
        "rarity": "common",
        "stackable": true,
        "quantity": 1,
        "name": "Wood log",
        "textureiconid": 1,
        "addpropplayer": false,
        "propname": "null",
        "proptype": "null",
        "propvalue": "null"
    },
    {
        "id": 2,
        "type": "tool",
        "equipmentslot": "rod",
        "rarity": "common",
        "stackable": false,
        "quantity": 1,
        "name": "Wooden Rod",
        "textureiconid": 2,
        "addpropplayer": true,
        "propname": "fishing",
        "proptype": "int",
        "propvalue": 1
    },
    {
        "id": 3,
        "type": "weapon",
        "equipmentslot": "main_hand",
        "rarity": "rare",
        "stackable": false,
        "quantity": 1,
        "name": "Rare Wooden Sword",
        "textureiconid": 3,
        "addpropplayer": true,
        "propname": "attack",
        "proptype": "int",
        "propvalue": 3
    },
    {
        "id": 4,
        "type": "armor",
        "equipmentslot": "armor",
        "rarity": "common",
        "stackable": false,
        "quantity": 1,
        "name": "Wooden Shield",
        "textureiconid": 4,
        "addpropplayer": true,
        "propname": "defense",
        "proptype": "int",
        "propvalue": 1
    },
    {
        "id": 5,
        "type": "armor",
        "equipmentslot": "helmet",
        "rarity": "common",
        "stackable": false,
        "quantity": 1,
        "name": "Wooden helmet",
        "textureiconid": 5,
        "addpropplayer": true,
        "propname": "defense",
        "proptype": "int",
        "propvalue": 1
    },
    {
        "id": 6,
        "type": "tool",
        "equipmentslot": "tool",
        "rarity": "common",
        "stackable": false,
        "quantity": 1,
        "name": "Wooden hammer",
        "textureiconid": 6,
        "addpropplayer": true,
        "propname": "mining",
        "proptype": "int",
        "propvalue": 1
    },
    {
        "id": 7,
        "type": "tool",
        "equipmentslot": "tool",
        "rarity": "common",
        "stackable": false,
        "quantity": 1,
        "name": "Wooden pickaxe",
        "textureiconid": 7,
        "addpropplayer": true,
        "propname": "mining",
        "proptype": "int",
        "propvalue": 2
    },
    {
        "id": 8,
        "type": "tool",
        "equipmentslot": "tool",
        "rarity": "common",
        "stackable": false,
        "quantity": 1,
        "name": "Wooden shovel",
        "textureiconid": 8,
        "addpropplayer": false,
        "propname": "null",
        "proptype": "null",
        "propvalue": "null"
    },
    {
        "id": 9,
        "type": "resource",
        "equipmentslot": "null",
        "rarity": "common",
        "stackable": false,
        "quantity": 1,
        "name": "Wood pile",
        "textureiconid": 9,
        "addpropplayer": false,
        "propname": "null",
        "proptype": "null",
        "propvalue": "null"
    },
    {
        "id": 10,
        "type": "tool",
        "equipmentslot": "tool",
        "rarity": "rare",
        "stackable": false,
        "quantity": 1,
        "name": "Rare Golden Pickaxe",
        "textureiconid": 10,
        "addpropplayer": true,
        "propname": "mining",
        "proptype": "int",
        "propvalue": 5
    },
    {
        "id": 11,
        "type": "item/pieces",
        "equipmentslot": "null",
        "rarity": "rare",
        "stackable": false,
        "quantity": 1,
        "name": "Piece Pickaxe(Rare Golden)1",
        "textureiconid": 11,
        "addpropplayer": false,
        "propname": "null",
        "proptype": "null",
        "propvalue": "null"
    },
    {
        "id": 12,
        "type": "item/pieces",
        "equipmentslot": "null",
        "rarity": "rare",
        "stackable": false,
        "quantity": 1,
        "name": "Piece Pickaxe(Rare Golden)2",
        "textureiconid": 12,
        "addpropplayer": false,
        "propname": "null",
        "proptype": "null",
        "propvalue": "null"
    },
    {
        "id": 13,
        "type": "item/pieces",
        "equipmentslot": "null",
        "rarity": "rare",
        "stackable": false,
        "quantity": 1,
        "name": "Piece Pickaxe(Rare Golden)3",
        "textureiconid": 13,
        "addpropplayer": false,
        "propname": "null",
        "proptype": "null",
        "propvalue": "null"
    },
    {
        "id": 14,
        "type": "item/pieces",
        "equipmentslot": "null",
        "rarity": "rare",
        "stackable": false,
        "quantity": 1,
        "name": "Piece Pickaxe(Rare Golden)4",
        "textureiconid": 14,
        "addpropplayer": false,
        "propname": "null",
        "proptype": "null",
        "propvalue": "null"
    },
    {
        "id": 15,
        "type": "weapon",
        "equipmentslot": "main_hand",
        "rarity": "epic",
        "stackable": false,
        "quantity": 1,
        "name": "Epic Ice Sword of Methylon",
        "textureiconid": 15,
        "addpropplayer": true,
        "propname": "attack",
        "proptype": "int",
        "propvalue": 7
    }
];
var player_inv_initial = {"0": 0,"1": 1,"2": 2, "3": 3, "4": 4,"5": 5,"6": 6,"7": 7,"8": 8,"9": 10,"10": 8,"11": 0,"12": 9,"13": null,"14": null,"15": null,}
var player_truck_initial = {"0": null,"1": null,"2": null,"3": null,"4": null,"5": null,"6": null,"7": null,"8": null,"9": null,"10": null,"11": null,"12": null,"13": null,"14": null,"15": null,"16": null,"17": null,"18": null,"19": null,"20": null,"21": null,"22": null,"23": null,"24": null,"25": null,"26": null,"27": null,"28": null,"29": null,};
// end vars