import Alert from "react-bootstrap/Alert";
import React from "react";
import { Container } from "react-bootstrap";

function Welcome() {
  return (
    <>
      <Container>
        <h1>BENVENUTO SU EPICBOOK ! </h1>
        <Alert variant="success">
          <Alert.Heading>
            BENVENUTO IN QUESTO <span>SHOP</span> DI LIBRI
          </Alert.Heading>
          <p>NOTA, qua non puoi comprare proprio nulla, perciò esci</p>
          <hr />
          <p className="mb-0">
            Se hai bisogno di comprare vai su amazon qua puoi solo guardare
          </p>
        </Alert>
      </Container>
    </>
  );
}

export default Welcome;
