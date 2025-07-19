import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

function CommentArea({ asin }) {

    const [resultsFetchComments, setResultsFetchComments] = useState([])

    function fetchComments() {
        fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhNWE0YjRlZjFiYzAwMTVkZjVhZDQiLCJpYXQiOjE3NTI4NTk3OTMsImV4cCI6MTc1NDA2OTM5M30.stPsm7uzUvxxHqCqOr1dAXgJJw5twG3bj3qU5-E7Nxg"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setResultsFetchComments(data)

            })
    }

    useEffect(() => {
        fetchComments()
    }, [asin])



    return (
        <>
            <AddComment
                asin={asin} />
            <CommentList
                resultsFetchComments={resultsFetchComments} />

        </>
    )
}

export default CommentArea;