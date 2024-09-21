import "../../App.css"
import {BookAttr, SHELF_STATUS} from "../../type.ts";

type BookProps = {
    book: BookAttr;
}

const Book = (props: BookProps) => {
    const {
        book
    } = props;
    // const [shelve, setShelve] = useState(shelf)

    // const handleChange = (event) => {
    //     const newShelf = event.target.value;
    //     setShelve(newShelf)
    //     updateBookShelve(id, newShelf)
    // }

    // const updateBookShelve = (bookId: string, newShelfStatus: string) => {
    //     try {
    //         const updateShelf = async () => {
    //             const res = await update(bookId, newShelfStatus)
    //             console.log("res update shelf ====>>>> ", res)
    //         }
    //         updateShelf()
    //     } catch (error) {
    //         console.log("Error updating book!: ", error)
    //     }
    // }

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url(${book.imageLinks.thumbnail})`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select onChange={() => {
                    }}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value={SHELF_STATUS.CURRENT_READING}
                                selected={book.shelf === SHELF_STATUS.CURRENT_READING}
                        >
                            Currently Reading
                        </option>
                        <option value={SHELF_STATUS.WANT_TO_READ} selected={book.shelf === SHELF_STATUS.WANT_TO_READ}
                        >Want to
                            Read
                        </option>
                        <option value={SHELF_STATUS.READ} selected={book.shelf === SHELF_STATUS.READ}
                        >Read
                        </option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )
}

export default Book
