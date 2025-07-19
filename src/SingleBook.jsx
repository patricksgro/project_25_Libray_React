import { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import CommentArea from './CommentArea';

function SingleBook({ book }) {

    const [selected, setSelected] = useState(false)

    function invertValue() {
        setSelected(!selected)
        console.log(selected)
    }

    return (
        <>

            {
                selected && <CommentArea
                    asin={book.asin}></CommentArea>
            }

            <Container className="mt-4">
                <Row className="justify-content-center g-5">
                    <Col md={12}>
                        <Card className="mb-3 bg-light" style={{ minHeight: '400px' }}>
                            <Row>
                                <Col md={4} className="g-3">
                                    <Card.Img
                                        className="changePositionImage"
                                        style={{
                                            height: '350px',
                                            width: '260px', marginLeft: '-70px',
                                            border: selected ? 'solid 3px red' : 'none'
                                        }}
                                        src={book.img}
                                        onClick={invertValue}
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
                                            <small className="text-body-secondary">Ultimo aggiornamento 3 minuti fa</small>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default SingleBook;