export { }

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

// SuperClase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }
}

// get y set

class Picture extends Item {
    public static photoOrientation = PhotoOrientation;
    // Propiedades
    private _orientation: PhotoOrientation;

    // Constructor
    public constructor(
        id: number,
        title: string,
        orientation: PhotoOrientation
    ) {
        super(id, title);
        this._orientation = orientation;
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

class Album extends Item {
    private _pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id, title);
        this._pictures = [];
    }

    public addPicture(picture: Picture) {
        this._pictures.push(picture);
    }
    
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'my photos', PhotoOrientation.Square);
album.addPicture(picture);

console.log('Album' ,album);

// Accediendo a los miembros publicos
console.log('picture.id', picture.id);
picture.title = 'Nuevo titulo'; // private, set title('Nuevo titulo');
album.title = 'Personal Activities'; // private, set title('Personal Activities');
console.log('album', album);

// Probar miembro estatico
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);