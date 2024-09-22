import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Book from "../components/Book";
import {BookAttr} from "../type.ts";
import {search} from "../service/BooksAPI.tsx";

type SearchScreenProps = {
    onChangeShelve: any;
}

const SearchScreen = (props: SearchScreenProps) => {
    const {onChangeShelve} = props;
    const [inputSearch, setInputSearch] = useState("");
    const [listBooksBySearch, setListBooksBySearch] = useState([])
    const navigate = useNavigate();

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
                setListBooksBySearch(res)
            }
        }
        getBookBySearch(inputText)
    }

    useEffect(() => {
        handleSearch(inputSearch)
    }, [inputSearch]);

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a
                    className="close-search"
                    onClick={() => navigate("/")}
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
                        <Book book={book} key={book.id} onChangeShelve={onChangeShelve}/>

                    ))) : (
                        <div>
                            <p>No book found!</p>
                        </div>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default SearchScreen
