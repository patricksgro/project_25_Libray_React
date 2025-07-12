import { Alert } from "react-bootstrap";

function Welcome() {
  return (
    <>
      {["primary"].map((variant) => (
        <Alert key={variant} variant={variant}>
          Benvenuto nella tua libreia
        </Alert>
      ))}
    </>
  );
}

export default Welcome;
