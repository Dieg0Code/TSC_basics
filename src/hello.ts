export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity {
    // copia de los atributos de Entity
    description: string;
}

interface Picture extends Entity {
    // copia de los atributos de Entity
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 1,
    title: 'Meetings',
    description: 'Photos taken during meetings',
};

const picture: Picture = {
    id: 2,
    title: 'Family',
    orientation: PhotoOrientation.Landscape,
};

let newPicture = {} as Picture;
newPicture.id = 3;
newPicture.title = 'Friends';

console.log(album, picture, newPicture);
console.log('test');