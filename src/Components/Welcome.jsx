
import { Alert } from "react-bootstrap";
import '../StyleComponents/Welcome.css'

function Welcome() {



  return (
    <>
      <Alert variant="success margin" className="mt-4">
        <Alert.Heading >Benvenuto in EpiBOOKS</Alert.Heading>
        <p className="mt-3">
          La tua libreria digitale in cui potrai trovare i tuoi libri dal genere Horror. <br />
          Non dimenticare di lasciare un commento!
        </p>
        <hr />
        <div className="d-flex justify-content-end">

        </div>
      </Alert>
    </>
  );
}

export default Welcome;
