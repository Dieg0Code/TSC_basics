"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("./album");
const photoOrientation_1 = require("./photoOrientation");
const picture_1 = require("./picture");
const user_1 = require("./user");
const user = new user_1.User(1, 'pepe', 'Pedro', true);
const album = new album_1.Album(10, 'Fotos de familia');
const picture = new picture_1.Picture(1, 'Fotos :)', '2021-02', photoOrientation_1.PhotoOrientation.Landscape);
// Creamos relaciones entre objetos
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
// Borramos album
user.removeAlbum(album);
console.log('user', user);
