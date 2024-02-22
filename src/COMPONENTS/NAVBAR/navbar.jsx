import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SearchBooksContext } from "../CONTEXT/searchBooksContext";

const MyNav = () => {
  const { book, setBook } = useContext(SearchBooksContext);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-around">
          <>
            <Navbar.Brand href="#">EPICBOOK</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
          </>
          <input
            value={book}
            onChange={(e) => {
              setBook(e.target.value);
            }}
            type="text"
            placeholder="Cerca titolo"
          ></input>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
