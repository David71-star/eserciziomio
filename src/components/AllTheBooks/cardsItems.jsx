import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const CardsItemsChild = ({category, img, price, title}) => {
    return (
        <>
        <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-truncate">{title}</Card.Title>
        <Card.Text>
          {category}
        </Card.Text>
        <Button variant="primary">{price}</Button>
      </Card.Body>
    </Card>
      </>
);
};

export default CardsItemsChild;