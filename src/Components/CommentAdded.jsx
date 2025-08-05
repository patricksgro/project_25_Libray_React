import { Button, Modal } from "react-bootstrap";

function CommentAdded() {
    return (
        <div className='modal show'
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Commento aggiunto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Commento aggiunto correttamente, ricarica la pagina per vederlo!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default CommentAdded;