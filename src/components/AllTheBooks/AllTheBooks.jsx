import booksFantasy from "./fantasy.json"
import React from "react";
import Container from "react-bootstrap/esm/Container";
import CardsItemsChild from "./cardsItems";
import { Col } from "react-bootstrap";




const Cards = () => {
    return (
    <Container>
        <div className="d-flex justify-content-center flex-wrap">
        {booksFantasy.map(book => {
        return (
            <Col xs={12} md={4} lg={3}>
                <CardsItemsChild 
                category={book.category}
                img={book.img}
                price={book.price}
                title={book.title}
                />
            </Col>
        )   
    })}
       </div> 
    </Container>
    );

};

export default Cards;