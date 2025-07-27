import { UseAsin } from '../ContextAsin/ContextAsin';
import { Card, Container, Row, Col } from 'react-bootstrap'
import CommentList from './CommentList';
import { useComments } from '../ContextAsin/ContextComments';

function SingleBook({ book }) {

    const { selected, setSelected } = UseAsin()

    const { resultsFetchComments } = useComments()

    return (
        <>
            <Container className="mt-4">
                <Row className="justify-content-center g-5">
                    <Card className="mb-3 bg-light" style={{ minHeight: '400px' }}>
                        <Row>
                            <Col md={4} className="g-3">
                                <Card.Img
                                    className="changePositionImage"
                                    style={{
                                        height: '350px',
                                        width: '260px', marginLeft: '-70px',
                                        border: selected == book.asin ? 'solid 3px red' : 'none'
                                    }}
                                    src={book.img}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title className="fs-1">{book.title}</Card.Title>
                                    <Card.Text>
                                        <small className="text-body-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus et enim, earum, alias, sit consequatur dolor nobis iste laborum error ducimus deserunt. Laborum, iure quis.</small>
                                    </Card.Text>
                                    <Card.Text className="fw-bold fs-1 text-success">
                                        € {book.price}
                                    </Card.Text>
                                    <Card.Text>
                                        <small onClick={() => setSelected(book.asin)} className="text-body-secondary cursorPointer">Mostra commenti</small>
                                    </Card.Text>
                                    {selected === book.asin && (
                                        <CommentList resultsFetchComments={resultsFetchComments} />
                                    )}
                                </Card.Body>
                            </Col>
                        </Row>



                    </Card>
                </Row>
            </Container>
        </>

    )
}

export default SingleBook;