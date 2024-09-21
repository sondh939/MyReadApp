export interface BookAttr {
    id: string;
    title: string;
    authors: string[];
    imageLinks: ImageURL;
    shelf: SHELF_STATUS;
    updateBooks?: any;
}

type ImageURL = {
    smallThumbnail: string;
    thumbnail: string;
}

export enum SHELF_STATUS {
    CURRENT_READING = "currentlyReading",
    WANT_TO_READ = "wantToRead",
    READ = "read",
}

export enum SHELVE_DISPLAY {
    CURRENT_SHELVE = "Currently Reading",
    WANT_TO_SHELVE = "Want to Read",
    READ_SHELVE = "Read",
}

export interface Shelve {
    shelveId: string;
    shelveName: SHELF_STATUS;
    shelveDisplayName: SHELVE_DISPLAY;
}
