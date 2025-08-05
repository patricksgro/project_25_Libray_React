import horror from "../../books/horror.json";
import SingleBook from '../Components/SingleBook.jsx'
import { useState } from "react";
import Welcome from "../Components/Welcome.jsx";
import "../StyleComponents/AllTheBooks.css";
import { Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

function AllTheBooks() {

    const [BookFilter, setBookFilter] = useState('')

    const booksFiltered =
        horror.filter(book => book.title.toLowerCase().includes(BookFilter.toLowerCase()))

    return (
        <>
            <Welcome />


            <Container fluid className="w-75">
                <Row>
                    <Col lg={7} md={12} sm={12} className="order-2 order-lg-1">
                        {
                            booksFiltered.length === 0 ? <h2 className="mt-5">Nessun libro trovato</h2> :
                                booksFiltered.map((book) => (
                                    <Link key={book.asin} to={`/BookDetails/${book.asin}`} style={{ textDecoration: 'none' }}>
                                        <SingleBook
                                            book={book}
                                        />
                                    </Link>
                                ))
                        }
                    </Col>

                    <Col lg={5} md={12} sm={12} className="order-1 order-lg-2">
                        <div className="stiky">
                            <h3 className="px-5 mt-5 findBook">Trova il tuo libro, mettiti comodo e vivi un'esperienza unica!</h3>
                            <div className='my-4 d-flex justify-content-center'>
                                <input
                                    type="text"
                                    placeholder={'Cerca il tuo libro...'}
                                    value={BookFilter}
                                    onChange={(e) => setBookFilter(e.target.value)}
                                    className='inputStyle' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default AllTheBooks;

