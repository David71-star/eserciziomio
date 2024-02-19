import bookFantasy from "../AllTheBooks/fantasy.json";
import { Col } from "react-bootstrap";
import SingleBook from "../SingleBook/SingleBook";
import React, { useState } from "react";

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // console.log(searchResults);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    const results = bookFantasy.filter((book) =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleBookClick = (index) => {
    const updatedResults = [...searchResults];
    updatedResults[index].selected = !updatedResults[index].selected;
    setSearchResults(updatedResults);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="d-flex justify-content-center flex-wrap">
        {bookFantasy.map((book, index) => {
          return (
            <Col
              key={book.asin}
              xs={12}
              md={4}
              lg={3}
              style={{ border: book.selected ? "2px solid red" : "none" }}
              onClick={() => handleBookClick(index)}
            >
              <SingleBook
                category={book.category}
                img={book.img}
                price={book.price}
                title={book.title}
                asin={book.asin}
              />
            </Col>
          );
        })}
      </div>
    </>
  );
};

export default BookSearch;
