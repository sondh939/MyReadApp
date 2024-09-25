import "./App.css";
import {useEffect, useState} from "react";
import {getAll, update} from "./service/BooksAPI";
import {BookAttr, SHELF_STATUS, Shelve, SHELVE_DISPLAY} from "./type.ts";
import {Route, Routes} from "react-router-dom";
import SearchScreen from "./screen/SearchScreen.tsx";
import MainScreen from "./screen/MainScreen.tsx";

function App() {
    const [listAllBooks, setListAllBooks] = useState({});

    const Shelve: Shelve = [
        {
            shelveId: "1",
            shelveName: SHELF_STATUS.CURRENT_READING,
            shelveDisplayName: SHELVE_DISPLAY.CURRENT_SHELVE,
        }, {
            shelveId: "2",
            shelveName: SHELF_STATUS.WANT_TO_READ,
            shelveDisplayName: SHELVE_DISPLAY.WANT_TO_SHELVE,
        }, {
            shelveId: "3",
            shelveName: SHELF_STATUS.READ,
            shelveDisplayName: SHELVE_DISPLAY.READ_SHELVE,
        },
    ]

    useEffect(() => {
        const getData = async () => {
            const response = await getAll();
            const BookWithShelve = {
                currentlyReading: [],
                wantToRead: [],
                read: []
            }
            response.forEach(book => {
                if (BookWithShelve[book.shelf]) {
                    return BookWithShelve[book.shelf].push(book);
                }
            })
            setListAllBooks(BookWithShelve);
        }
        getData()
    }, [])

    const updateBookShleve = async (book: BookAttr, shelve: string) => {
        try {
            await update(book, shelve);
            setListAllBooks(prevList => {
                const updateList = {...prevList}
                if (book.shelf && updateList[book.shelf]) {
                    updateList[book.shelf] = updateList[book.shelf].filter(b => b.id !== book.id);
                }
                updateList[shelve] = [...(updateList[shelve] || []), {...book, shelf: shelve}];

                return updateList;
            })
        } catch (error) {
            window.alert("Can't update book!!!")
        }
    }

    const onChangeShelve = (book: BookAttr, shelve: string) => {
        updateBookShleve(book, shelve);
    }

    return (
        <div className="app">
            <Routes>
                <Route exact path="/" element={<MainScreen listBooks={listAllBooks} shelve={Shelve}
                                                           onChangeShelve={onChangeShelve}/>}/>
                <Route path="/search"
                       element={<SearchScreen onChangeShelve={onChangeShelve} listBooks={listAllBooks}/>}/>
            </Routes>
        </div>
    );
}

export default App;
