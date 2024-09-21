import BookShelve from "../components/BookShelve";
import {Shelve} from "../type.ts";
import {useNavigate} from "react-router-dom";

type MainScreenProps = {
    listBooks: any;
    shelve: Shelve;
}

const MainScreen = (props: MainScreenProps) => {
    const {listBooks, shelve} = props;
    const navigate = useNavigate();
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <BookShelve listBooks={listBooks} shelve={shelve}/>
            <div className="open-search">
                <a onClick={() => navigate("/search")}>Add a book</a>
            </div>
        </div>
    )
}

export default MainScreen;
