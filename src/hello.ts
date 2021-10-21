export { }

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

class Picture {
    // Propiedades
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;

    // Constructor
    public constructor(
        id: number,
        title: string,
        orientation: PhotoOrientation
    ) {
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
    }

    // Métodos
    public toString() {
        return `[id: ${this.#id},
             title: ${this.#title}, 
             orientation: ${this.#orientation}]`;
    }
}

class Album {
    #id: number;
    #title: string;
    #pictures: Picture[];

    public constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    public addPicture(picture: Picture) {
        this.#pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'my photos', PhotoOrientation.Square);
album.addPicture(picture);

console.log('Album' ,album);
