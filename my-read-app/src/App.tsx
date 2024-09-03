import "./App.css";
import {useEffect, useState} from "react";
import {getAll, search} from "./service/BooksAPI";
import {BookAttr, SHELF_STATUS} from "./type.ts";
import BookShelve from "./components/BookShelve";
import Book from "./components/Book";

function App() {
    const [showSearchPage, setShowSearchpage] = useState(false);
    const [listAllBooks, setListAllBooks] = useState<BookAttr[]>([]);
    const [inputSearch, setInputSearch] = useState("");
    const [listBooksBySearch, setListBooksBySearch] = useState<BookAttr[]>([]);
    const [currentReadingList, setCurrentReadingList] = useState<BookAttr[]>([])
    const [wantToReadList, setWantToReadList] = useState<BookAttr[]>([])
    const [readList, setReadList] = useState<BookAttr[]>([])

    useEffect(() => {
        const getData = async () => {
            const res = await getAll();
            setListAllBooks(res);
        }
        getData()
    }, [])
    console.log("data ===>>>>> ", listAllBooks)

    const bookCurrentReading: BookAttr[] = listAllBooks.filter((book: BookAttr) => book.shelf === SHELF_STATUS.CURRENT_READING)
    const bookWantToRead: BookAttr[] = listAllBooks.filter((book: BookAttr) => book.shelf === SHELF_STATUS.WANT_TO_READ)
    const bookRead: BookAttr[] = listAllBooks.filter((book: BookAttr) => book.shelf === SHELF_STATUS.READ)

    const handleSearch = (inputText: string) => {
        const getBookBySearch = async (text: string) => {
            if (inputText === "") {
                setListBooksBySearch([])
            } else {
                const res = await search(text, "10").catch((err: Error) => {
                    if (err instanceof Error) {
                        setListBooksBySearch([])
                    }
                })
                console.log("====>>> ", res)
                setListBooksBySearch(res)
            }
        }
        getBookBySearch(inputText)
    }

    useEffect(() => {
        handleSearch(inputSearch)
    }, [inputSearch]);

    const data = [
        {
            "id": "nggnmAEACAAJ",
            "title": "The Linux Command Line",
            "authors": [
                "William E. Shotts, Jr."
            ],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "shelf": "currentlyReading"
        },
        {
            "id": "sJf1vQAACAAJ",
            "title": "Learning Web Development with React and Bootstrap",
            "authors": [
                "Harmeet Singh",
                "Mehul Bhatt"
            ],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "shelf": "currentlyReading"
        },
        {
            "id": "evuwdDLfAyYC",
            "title": "The Cuckoo's Calling",
            "authors": [
                "Robert Galbraith"
            ],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "shelf": "wantToRead"
        },
        {
            "id": "74XNzF_al3MC",
            "title": "Lords of Finance",
            "authors": [
                "Liaquat Ahamed"
            ],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "shelf": "wantToRead"
        },
        {
            "id": "jAUODAAAQBAJ",
            "title": "Needful Things",
            "authors": [
                "Stephen King"
            ],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "shelf": "read"
        },
        {
            "id": "IOejDAAAQBAJ",
            "title": "React",
            "authors": [
                "Nils Hartmann",
                "Oliver Zeigermann"
            ],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "shelf": "read"
        },
        {
            "id": "1wy49i-gQjIC",
            "title": "Satire TV",
            "authors": [
                "Jonathan Gray",
                "Jeffrey P. Jones",
                "Ethan Thompson"
            ],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "shelf": "read"
        }
    ]

    const data2 = {
        "currentlyReading": [
            "sJf1vQAACAAJ"
        ],
        "wantToRead": [
            "evuwdDLfAyYC",
            "74XNzF_al3MC"
        ],
        "read": [
            "jAUODAAAQBAJ",
            "IOejDAAAQBAJ",
            "1wy49i-gQjIC",
            "nggnmAEACAAJ"
        ]
    }

    const updateShelf = (data, data2) => {
        const shelfMap = {};

        // Tạo map từ data2
        for (const shelf in data2) {
            data2[shelf].forEach(id => {
                shelfMap[id] = shelf;
            });
        }

        // Cập nhật shelf cho các đối tượng trong data
        return data.map(book => {
            if (shelfMap[book.id]) {
                return {...book, shelf: shelfMap[book.id]};
            }
            return book;
        });
    };
    const result = updateShelf(data, data2)
    console.log("result ===>>>> ", result)

    return (
        <div className="app">
            {showSearchPage ? (
                <div className="search-books">
                    <div className="search-books-bar">
                        <a
                            className="close-search"
                            onClick={() => setShowSearchpage(!showSearchPage)}
                        >
                            Close
                        </a>
                        <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title, author, or ISBN"
                                value={inputSearch}
                                onChange={(e) => setInputSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {listBooksBySearch.length > 0 ? (listBooksBySearch.map((book: BookAttr) => (
                                <Book bookId={book.bookId} title={book.title} authors={book.authors}
                                      imageLinks={book.imageLinks} shelf={book.shelf}
                                      updateShelfUI={handleUpdateShelve}/>
                            ))) : (
                                <div>
                                    <p>No book found!</p>
                                </div>
                            )}
                        </ol>
                    </div>
                </div>
            ) : (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <BookShelve listBooks={bookCurrentReading} shelveStatus={SHELF_STATUS.CURRENT_READING}
                            />
                            <BookShelve listBooks={bookWantToRead} shelveStatus={SHELF_STATUS.WANT_TO_READ}
                            />
                            <BookShelve listBooks={bookRead} shelveStatus={SHELF_STATUS.READ}
                            />
                        </div>

                    </div>
                    <div className="open-search">
                        <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
