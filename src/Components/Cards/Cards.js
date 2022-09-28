import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Cards.css'

const Cards = (props) => {
    console.log(props)
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <p className='p'>For Age: {props.age}</p>
                    <p className='p'>Time Required: {props.time}s</p>
                    <div className='text-center'>
                        <Button variant="primary">Add To List</Button>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;