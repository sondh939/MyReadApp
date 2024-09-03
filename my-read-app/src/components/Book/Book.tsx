import "../../App.css"
import {BookAttr, SHELF_STATUS} from "../../type.ts";
import {update} from "../../service/BooksAPI.tsx";
import {useState} from "react";


const Book = (props: BookAttr) => {
    const {title, authors, imageLinks, id, shelf, updateBooks} = props;
    const [shelve, setShelve] = useState(shelf)

    const handleChange = (event) => {
        const newShelf = event.target.value;
        setShelve(newShelf)
        updateBookShelve(id, newShelf)
    }

    const updateBookShelve = (bookId: string, newShelfStatus: string) => {
        try {
            const updateShelf = async () => {
                const res = await update(bookId, newShelfStatus)
                console.log("res ====>>>> ", res)
            }
            updateShelf()
        } catch (error) {
            console.log("Error updating book!: ", error)
        }
    }

    const updateShelf = (data, data2) => {
        const shelfMap = {};

        // Tạo map từ data2
        for (const shelf in data2) {
            data2[shelf].forEach(id => {
                shelfMap[id] = shelf;
            });
        }

        // Cập nhật shelf cho các đối tượng trong data
        return data.map(book => {
            if (shelfMap[book.id]) {
                return {...book, shelf: shelfMap[book.id]};
            }
            return book;
        });
    };

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url(${imageLinks.thumbnail})`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select value={shelve} onChange={handleChange}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value={SHELF_STATUS.CURRENT_READING} selected={shelf === SHELF_STATUS.CURRENT_READING}
                        >
                            Currently Reading
                        </option>
                        <option value={SHELF_STATUS.WANT_TO_READ} selected={shelf === SHELF_STATUS.WANT_TO_READ}
                        >Want to
                            Read
                        </option>
                        <option value={SHELF_STATUS.READ} selected={shelf === SHELF_STATUS.READ}
                        >Read
                        </option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

export default Book
