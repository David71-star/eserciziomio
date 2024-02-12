import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Alert } from 'react-bootstrap';



const Welcome = () => {
    return (
        <>
          <Container>
            <div>
              <h1>Benvenuto!</h1>
                <Alert variant="info">
                  Ciao! Benvenuto nell'applicazione. Speriamo che ti trovi bene qui.
                </Alert>
            </div>
          </Container>
        </>
);
};

export default Welcome;