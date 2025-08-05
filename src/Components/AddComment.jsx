import { useEffect, useState } from "react";
import { FormGroup, Form, Button } from "react-bootstrap";
import '../StyleComponents/AddComment.css'
import CommentAdded from "./CommentAdded";

function AddComment({ asin }) {

    const [datiForm, setDatiForm] = useState({ elementId: asin })
    const [commentDone, setCommentDone] = useState(false)


    useEffect(() => {
        if (asin)
            setDatiForm(prev => ({
                ...prev,
                elementId: asin
            }))
    }, [asin])

    function salvaDati(e) {
        e.preventDefault()

        fetch('https://striveschool-api.herokuapp.com/api/comments', {
            method: 'POST',
            body: JSON.stringify(datiForm),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhNWE0YjRlZjFiYzAwMTVkZjVhZDQiLCJpYXQiOjE3NTQyMDk2MDMsImV4cCI6MTc1NTQxOTIwM30.XjBDrz0lCp_MxlBNpFMZmEdyRdJFgYZWiYeiGfI6L5k'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error))
        setCommentDone(true)

    }

    const handleChange = (e) => {
        setDatiForm({
            ...datiForm,
            [e.target.name]: e.target.value,
        })
    }


    return (
        <>
            <Form className="bg-light p-4 borderSolid mt-4" onSubmit={salvaDati}>
                <Form.Group className="mb-3" >
                    <Form.Label>Commento<span className="text-danger">*</span> (Inserire almeno 15 caratteri)</Form.Label>
                    <Form.Control
                        required
                        minLength={15}
                        type="text"
                        name="comment"
                        onChange={handleChange} />
                </Form.Group>
                <FormGroup>
                    <Form.Label>Valutazione<span className="text-danger">*</span></Form.Label>
                    <Form.Select
                        required
                        aria-label="Default select example"
                        name="rate"
                        onChange={handleChange}>
                        <option value="">Scegli la tua valutazione...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </FormGroup>
                <Button className="mt-3 bg-success" type="submit">Salva</Button>
            </Form>

            {
                commentDone && <CommentAdded onClose={() => setCommentDone(false)} />
            }
        </>
    )
}
export default AddComment;