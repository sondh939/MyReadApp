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
