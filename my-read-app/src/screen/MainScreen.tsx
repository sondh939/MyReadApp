import BookShelve from "../components/BookShelve";
import {Shelve} from "../type.ts";
import {useNavigate} from "react-router-dom";

type MainScreenProps = {
    listBooks: any;
    shelve: Shelve;
    onChangeShelve: any;
}

const MainScreen = (props: MainScreenProps) => {
    const {listBooks, shelve, onChangeShelve} = props;
    const navigate = useNavigate();
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {
                shelve.map(item => {
                    const booksOnShelf = listBooks[item.shelveName];
                    if (booksOnShelf) {
                        return (
                            <BookShelve bookShelveId={item.shelveId} listBook={booksOnShelf}
                                        shelve={item.shelveDisplayName}
                                        onChangeShelve={onChangeShelve}/>
                        )
                    }
                })
            }
            <div className="open-search">
                <a onClick={() => navigate("/search")}>Add a book</a>
            </div>
        </div>
    )
}

export default MainScreen;
