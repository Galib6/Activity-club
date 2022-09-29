import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Cards.css'

const Cards = (props) => {
    console.log(props)
    const { img, activity_name, description, time_req, for_Age } = props.allInfo;
    const { exercise } = props;
    return (
        <Col>
            <Card className='h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-primary '>{activity_name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <p className='p'>For Age: {for_Age}</p>
                    <p className='p'>Time Required: {time_req}s</p>
                    <div className='text-center'>
                        <Button variant="primary" onClick={() => { exercise(time_req) }} className='w-100'>Add To List</Button>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;