import "../../App.css"
import {Shelve} from "../../type.ts";
import Book from "../Book";


type BookShelveProps = {
    listBooks: any;
    shelve: Shelve;
}

const BookShelve = (props: BookShelveProps) => {
    const {listBooks, shelve} = props;

    return (
        <div className="bookshelf">
            {
                shelve.map(item => {
                    const booksOnShelf = listBooks[item.shelveName];
                    if (booksOnShelf) {
                        return (
                            <div className="bookshelf-books" key={item.shelveName}>
                                <h2 className="bookshelf-title">{item.shelveDisplayName}</h2>
                                <div className="books-grid">
                                    {booksOnShelf.map(book => (
                                        <Book book={book} key={book.id}/>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                    return null;
                })
            }
        </div>
    )
}
export default BookShelve
