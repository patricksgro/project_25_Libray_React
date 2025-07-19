import { useState } from "react";
import { FormGroup, Form, Button } from "react-bootstrap";

function AddComment({ asin }) {

    const [datiForm, setDatiForm] = useState({ elementId: asin })

    function salvaDati(e) {
        e.preventDefault()

        fetch('https://striveschool-api.herokuapp.com/api/comments', {
            method: 'POST',
            body: JSON.stringify(datiForm),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhNWE0YjRlZjFiYzAwMTVkZjVhZDQiLCJpYXQiOjE3NTI4NTk3OTMsImV4cCI6MTc1NDA2OTM5M30.stPsm7uzUvxxHqCqOr1dAXgJJw5twG3bj3qU5-E7Nxg'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }
    const handleChange = (e) => {
        setDatiForm({
            ...datiForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Commento</Form.Label>
                <Form.Control type="text"
                    name="comment"
                    onChange={handleChange} />
            </Form.Group>
            <FormGroup>
                <Form.Label>Valutazione</Form.Label>
                <Form.Select aria-label="Default select example"
                    name="rate"
                    onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Select>
            </FormGroup>
            <Button onClick={salvaDati}>Salva</Button>
        </Form>
    )
}
export default AddComment;