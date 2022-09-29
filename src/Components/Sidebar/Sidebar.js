import React from 'react';
import "./Sidebar.css"
import Button from 'react-bootstrap/Button';
import Exercise_Time from '../Excercise_time/Exercise_Time';

const Sidebar = (props) => {

    const breakTimeSet = () => {

    }



    // Add to Db  
    const addToDb = time => {
        const breakTimeInfo = {}

        // adding to db
        const seq = 1;
        breakTimeInfo[time] = seq;

        console.log(breakTimeInfo)

        localStorage.setItem('breakTimeInfo', JSON.stringify(breakTimeInfo));


    }



    return (
        <div className='side-bar '>
            <div className='mt-5 d-flex mx-3 '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzwgGkG6GwjSrYOghY42bRUJWRwwRaI0M2w&usqp=CAU" className='profile-picture' alt="" />
                <div className='d-flex flex-column ms-2'>
                    <h5 className='text-primary'>Asadullah Al  Galib</h5>
                    <p className='p'>Savar, Dhaka</p>
                </div>
            </div>

            <div className='d-flex justify-content-center mt-4 spec align-items-center mx-2 w-100 border border-primary'>
                <div className='d-flex flex-column px-3 '>
                    <h4 >75kg</h4>
                    <p >Weight</p>
                </div>
                <div className='d-flex flex-column px-3'>
                    <h4 >6.5</h4>
                    <p >Height</p>
                </div>
                <div className='d-flex flex-column px-3'>
                    <h4>25yrs</h4>
                    <p >Age</p>
                </div>

            </div>

            <div className='mt-5 '>
                <h4 className='px-3'>Add A Break</h4>
                <div className='btns mt-3 d-flex justify-content-center'>
                    <button onClick={() => addToDb(10)}>10s</button>
                    <button onClick={() => addToDb(20)}>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
            </div>

            <div className='mt-4 '>
                <h4 className='mx-3'>Exercise Details</h4>
                <Exercise_Time time={props.time}></Exercise_Time>
                <div className='d-flex justify-content-between mx-4  exercise-time p-2 mt-4 '>
                    <h5>Break time</h5>
                    <h5 className='mutedtext'>0 Second</h5>
                </div>

            </div>
            <Button variant="primary" className='w-70 mt-5 mx-5'>Activity Completed</Button>
        </div>
    );
};

export default Sidebar;