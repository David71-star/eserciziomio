import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import CommentArea from "../COMMENTAREA/commenArea";

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <Card
        onClick={() => setSelected(!selected)}
        style={{ border: selected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title className="text-truncate">{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </>
  );
}

export default SingleBook;
