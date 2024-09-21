import "./App.css";
import {useEffect, useState} from "react";
import {getAll} from "./service/BooksAPI";
import {SHELF_STATUS, Shelve, SHELVE_DISPLAY} from "./type.ts";
import {Route, Routes} from "react-router-dom";
import SearchScreen from "./screen/SearchScreen.tsx";
import MainScreen from "./screen/MainScreen.tsx";

function App() {
    const [showSearchPage, setShowSearchpage] = useState(false);
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

    return (
        <div className="app">
            <Routes>
                <Route exact path="/" element={<MainScreen listBooks={listAllBooks} shelve={Shelve}/>}/>
                <Route path="/search" element={<SearchScreen/>}/>
            </Routes>
        </div>
    );
}

export default App;
