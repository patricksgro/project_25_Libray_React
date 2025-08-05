import { createContext, useContext } from "react";
import { useState, useEffect } from "react"
import { UseAsin } from "./ContextAsin";

const ContextComment = createContext()

export function CommentsProvider({ children }) {

    const [resultsFetchComments, setResultsFetchComments] = useState([])
    const { selected: asin } = UseAsin()

    function fetchComments() {

        if (!asin) return;

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
        if (asin) fetchComments()
    }, [asin])

    return (

        <ContextComment.Provider value={{ resultsFetchComments, setResultsFetchComments }}>

            {children}

        </ContextComment.Provider>

    )
}

export function useComments() {
    return useContext(ContextComment)
}