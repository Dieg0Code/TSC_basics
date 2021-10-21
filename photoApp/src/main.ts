import { Album, PhotoOrientation, Picture, User } from "./photoApp";

const user = new User(1, 'pepe', 'Pedro', true);
const album = new Album(10, 'Fotos de familia');
const picture = new Picture(1, 'Fotos :)', '2021-02', PhotoOrientation.Landscape);

// Creamos relaciones entre objetos
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);