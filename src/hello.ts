export { }

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

// get y set

class Picture {
    // Propiedades
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    // Constructor
    public constructor(
        id: number,
        title: string,
        orientation: PhotoOrientation
    ) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get orientation() {
        return this._orientation;
    }

    set orientation(orientation: PhotoOrientation) {
        this._orientation = orientation;
    }

    // Métodos
    public toString() {
        return `[id: ${this.id},
             title: ${this.title}, 
             orientation: ${this.orientation}]`;
    }
}

class Album {
    public id: number;
    public title: string;
    public pictures: Picture[];

    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'my photos', PhotoOrientation.Square);
album.addPicture(picture);

console.log('Album' ,album);
