import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentAreaModal from "../CommentArea/commentArea";

const SingleBook = ({ category, img, price, title, asin }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Button variant="primary">{price}</Button>
          <CommentAreaModal asin={asin} />
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
