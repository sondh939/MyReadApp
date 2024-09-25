import "../../App.css"
import {BookAttr, SHELF_STATUS} from "../../type.ts";
import Book from "../Book";


type BookShelveProps = {
    bookShelveId: string;
    listBook: any;
    shelve: SHELF_STATUS;
    onChangeShelve: any;
}

const BookShelve = (props: BookShelveProps) => {
    const {bookShelveId, listBook, shelve, onChangeShelve} = props;

    return (
        <div className="bookshelf" id={`${bookShelveId}`}>
            <div className="bookshelf-books" id={`${bookShelveId}-container`}>
                <h2 className="bookshelf-title" id={`${bookShelveId}-shelve-title`}>{shelve}</h2>
                <div className="books-grid" id={`${bookShelveId}-books-grid`}>
                    {
                        listBook.map((book: BookAttr) => {
                            return (
                                <Book book={book} key={book.id} shelve={shelve}
                                      onChangeShelve={onChangeShelve}/>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}
export default BookShelve
