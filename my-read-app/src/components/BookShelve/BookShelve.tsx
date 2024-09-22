import "../../App.css"
import {Shelve} from "../../type.ts";
import Book from "../Book";


type BookShelveProps = {
    listBooks: any;
    shelve: Shelve;
    onChangeShelve: any;
}

const BookShelve = (props: BookShelveProps) => {
    const {listBooks, shelve, onChangeShelve} = props;

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
                                        <Book book={book} key={book.id} shelve={item.shelveName}
                                              onChangeShelve={onChangeShelve}/>
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
