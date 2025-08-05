import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentArea from "../Components/CommentArea";
import { UseAsin } from "../ContextAsin/ContextAsin";
import { Col, Container, Row } from "react-bootstrap";


function BooksDetails() {

    const { id } = useParams()
    const { setSelected } = UseAsin()
    const [comments, setComments] = useState([])
    function fetchComments() {
        fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments/`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhNWE0YjRlZjFiYzAwMTVkZjVhZDQiLCJpYXQiOjE3NTQyMDk2MDMsImV4cCI6MTc1NTQxOTIwM30.XjBDrz0lCp_MxlBNpFMZmEdyRdJFgYZWiYeiGfI6L5k'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setComments(data)
            })
    }

    useEffect(() => {
        setSelected(id)

        return () => {
            setSelected(null)
        }
    }, [id, setSelected])


    useEffect(() => {
        fetchComments()
    }, [])


    return (
        <>

            <Container className="mt-5">
                <Row>
                    <Col>
                        {
                            comments.map(comment => (
                                <h5 key={comment._id}>
                                    {comment.comment}
                                </h5>
                            ))
                        }
                    </Col>

                    <Col>
                        <h3>
                            Dicci che ne pensi, non dimenticare la valutazione!
                        </h3>
                        <CommentArea />
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default BooksDetails;