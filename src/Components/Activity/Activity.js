import React, { useEffect, useState } from 'react';
import "./Activity.css"

import Row from 'react-bootstrap/Row';
import Cards from '../Cards/Cards';

const Activity = (props) => {
    const [activities, setActivity] = useState([])

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setActivity(data))
    }, [])


    return (
        <div className='activity-container'>
            <h1 className='text-primary mt-5'>Fitness-Master</h1>
            <h4>Select today's exercise</h4>
            <Row xs={1} md={3} className="g-4 mt-3">
                {
                    activities.map(activity => <Cards
                        key={activity.id}
                        allInfo={activity}
                        exercise={props.exercise}
                    ></Cards>)
                }
            </Row>
        </div>
    );
};

export default Activity;