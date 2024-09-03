import "../../App.css"
import {BookAttr, SHELF_STATUS} from "../../type.ts";
import {useEffect, useState} from "react";
import Book from "../Book";


type BookShelveProps = {
    listBooks: BookAttr[];
    shelveStatus: SHELF_STATUS;
}

const BookShelve = (props: BookShelveProps) => {
    const {listBooks, shelveStatus} = props;
    const [titleShleve, setTitleShleve] = useState("")

    useEffect(() => {
        if (shelveStatus === SHELF_STATUS.CURRENT_READING) {
            setTitleShleve("Currently Reading")
        } else if (shelveStatus === SHELF_STATUS.READ) {
            setTitleShleve("Read")
        } else {
            setTitleShleve("Want to read")
        }
    }, [shelveStatus])
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{titleShleve}</h2>
            <div key={titleShleve} className="bookshelf-books">
                {listBooks.map((book) => {
                    return (
                        <Book key={book.id} id={book.id} title={book.title} authors={book.authors}
                              imageLinks={book.imageLinks} shelf={book.shelf}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default BookShelve
