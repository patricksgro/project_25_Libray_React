import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => navigate('/'), 5000)
    }, [])

    return (
        <>
            <h1>Pagina non trovata</h1>
            <h3>Verrai reindirizzato alla HOME tra 5 secondi...</h3>
        </>
    )
}

export default NotFound;