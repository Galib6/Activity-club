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
        <div className='activity-container '>
            <div className='title'>
                <img src="mus.png" alt="" />
                <h1 >Fitness-Master</h1>
            </div>
            <h3>Select Today's Exercise :</h3>
            <Row xs={1} md={3} className="g-4 mt-3 rows">
                {
                    activities.map(activity => <Cards
                        key={activity.id}
                        allInfo={activity}
                        exercise={props.exercise}
                    ></Cards>)
                }
            </Row>
            <div className='mt-5 border border-primary bg-white rounded p-3'>
                <h4>Question : How Does react work ?</h4>
                <p>Answer: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props</p>
                <h4>Question : Diffrences between Props vs State ?</h4>
                <p>Answer : Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
                <h4>Question : Whats are used istead of useEffect ?</h4>
                <p>Answer : Running once on mount: fetch API data<br />
                    1.Running on state change: validating input field <br />
                    2.Running on state change: live filtering<br />
                    3.Running on state change: trigger animation on new array value<br />
                    4.Running on props change: update paragraph list on fetched API data update<br />
                    5.Running on props change: updating fetched API data to get BTC updated price </p>
            </div>
        </div >
    );
};

export default Activity;