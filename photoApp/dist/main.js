"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photoApp_1 = require("./photoApp");
var user = new photoApp_1.User(1, 'pepe', 'Pedro', true);
var album = new photoApp_1.Album(10, 'Fotos de familia');
var picture = new photoApp_1.Picture(1, 'Fotos :)', '2021-02', photoApp_1.PhotoOrientation.Landscape);
// Creamos relaciones entre objetos
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
