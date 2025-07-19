import horror from "../books/horror.json";
import SingleBook from './SingleBook.jsx'
import { useState } from "react";
import "./AllTheBooks.css";

function AllTheBooks() {

    const [BookFilter, setBookFilter] = useState('')

    const booksFiltered =
        horror.filter(book => book.title.toLowerCase().includes(BookFilter.toLowerCase()))

    return (
        <>
            <div className='my-4 d-flex justify-content-center'>
                <input
                    type="text"
                    placeholder={'Cerca il tuo libro...'}
                    value={BookFilter}
                    onChange={(e) => setBookFilter(e.target.value)}
                    className='inputStyle' />
            </div>
            {
                booksFiltered.map((book) => (
                    <SingleBook
                        key={book.asin}
                        book={book}
                    />
                ))
            }
        </>
    )

}

export default AllTheBooks;

