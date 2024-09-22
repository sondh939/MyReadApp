import "../../App.css"
import {BookAttr, SHELF_STATUS, Shelve, SHELVE_DISPLAY} from "../../type.ts";
import {useState} from "react";

type BookProps = {
    book: BookAttr;
    onChangeShelve: any;
    shelve: SHELF_STATUS;
}

const shelveList: Shelve[] = [
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

const Book = (props: BookProps) => {
    const {
        book, shelve, onChangeShelve
    } = props;
    const [currentShelf, setCurrentShelf] = useState(shelve)

    const handleChange = (event) => {
        const newShelf = event.target.value;
        setCurrentShelf(newShelf);
        onChangeShelve(book, newShelf);
    }


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
                    <select onChange={handleChange} value={currentShelf}>
                        <option disabled>
                            Move to...
                        </option>
                        {
                            shelveList.map((shelf) => {
                                return (
                                    <option key={shelf.shelveId} id={shelf.shelveId} value={shelf.shelveName}
                                    >
                                        {shelf.shelveDisplayName}
                                    </option>)
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )
}

export default Book
