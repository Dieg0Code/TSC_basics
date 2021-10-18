"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 1,
    title: 'Meetings',
    description: 'Photos taken during meetings',
};
var picture = {
    id: 2,
    title: 'Family',
    orientation: PhotoOrientation.Landscape,
};
var newPicture = {};
newPicture.id = 3;
newPicture.title = 'Friends';
console.log(album, picture, newPicture);
