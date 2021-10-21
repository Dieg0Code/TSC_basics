"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var Picture = /** @class */ (function () {
    // Constructor
    function Picture(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // Métodos
    Picture.prototype.toString = function () {
        return "[id: " + this.id + ",\n             title: " + this.title + ", \n             orientation: " + this.orientation + "]";
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}());
var album = new Album(1, 'Personal Pictures');
var picture = new Picture(1, 'my photos', PhotoOrientation.Square);
album.addPicture(picture);
console.log('Album', album);
// Accediendo a los miembros públicos
picture.id = 100; // public
picture.title = 'Nuevo título'; // public
album.title = 'Personal Activities'; // public
console.log('Album', album);
