import bookFantasy from "../AllTheBooks/fantasy.json"
import React from "react";
import Container from "react-bootstrap/esm/Container";
import CardsItemsChild from "./CardItem";
import { Col } from "react-bootstrap";
import SearchTitleBook from "../AllTheBooks/input";




const Singlecard= () => {
    return (
    <Container>
        <SearchTitleBook />
        <div className="d-flex justify-content-center flex-wrap">
        {bookFantasy.map(book => {
        return (
            <Col xs={12} md={4} lg={3}>
                <CardsItemsChild 
                category={book.category}
                img={book.img}
                price={book.price}
                title={book.title}
                key={book.asin}
                />
            </Col>
        )   
    })}
       </div> 
    </Container>
    );

};

export default Singlecard;

