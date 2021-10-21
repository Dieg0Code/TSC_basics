import { Album } from "./album";
import { PhotoOrientation } from "./photoOrientation";
import { Picture } from "./picture";
import { User } from "./user";


const user = new User(1, 'pepe', 'Pedro', true);
const album = new Album(10, 'Fotos de familia');
const picture = new Picture(1, 'Fotos :)', '2021-02', PhotoOrientation.Landscape);

// Creamos relaciones entre objetos
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);

// Borramos album
user.removeAlbum(album);
console.log('user', user);