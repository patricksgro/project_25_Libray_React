import horror from "../../books/horror.json";
import SingleBook from './SingleBook.jsx'
import { useState } from "react";
import "../StyleComponents/AllTheBooks.css";
import CommentArea from './CommentArea';
import { Col, Container, Row } from "react-bootstrap";
import { AsinProvider } from "../ContextAsin/ContextAsin.jsx";
import { CommentsProvider } from "../ContextAsin/ContextComments.jsx";

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

            <AsinProvider>
                <CommentsProvider>
                    <Container fluid className="w-75">
                        <Row>
                            <Col lg={9} md={9} sm={9}>
                                {
                                    booksFiltered.map((book) => (

                                        <SingleBook
                                            key={book.asin}
                                            book={book}
                                        />
                                    ))
                                }
                            </Col>
                            <Col lg={3} md={3} sm={3}>
                                <CommentArea></CommentArea>
                            </Col>

                        </Row>
                    </Container>
                </CommentsProvider>
            </AsinProvider >
        </>
    )

}

export default AllTheBooks;

