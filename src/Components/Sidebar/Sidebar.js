import React, { useEffect, useState } from 'react';
import "./Sidebar.css"
import Button from 'react-bootstrap/Button';
import Exercise_Time from '../Excercise_time/Exercise_Time';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = (props) => {


    const notify = () => toast("Congratulation! You are completed todays target");

    const [breakTime, setBreakTime] = useState(0)

    useEffect(() => {
        const breakTimeInfoStrigified = localStorage.getItem('break-Time-Info');
        if (breakTimeInfoStrigified) {
            const breakTimeInfo = JSON.parse(breakTimeInfoStrigified);
            const breaKTime = breakTimeInfo[1]
            setBreakTime(breaKTime)
        }
    }, [])

    console.log(breakTime)

    // Add to Db  
    const addToDb = (time) => {
        const breakTimeInfo = {}
        breakTimeInfo[1] = time;
        console.log(breakTimeInfo)
        localStorage.setItem('break-Time-Info', JSON.stringify(breakTimeInfo));
    }

    const BreakTimeSet = (time) => {
        addToDb(time)
        setBreakTime(time)

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
                <div className='d-flex flex-column px-3 pt-3 '>
                    <h4 className='text-center'>75kg</h4>
                    <p className='text-center'>Weight</p>
                </div>
                <div className='d-flex flex-column pt-3 px-3'>
                    <h4 className='text-center'>6.5</h4>
                    <p className='text-center'>Height</p>
                </div>
                <div className='d-flex flex-column pt-3 px-3'>
                    <h4 className='text-center'>25yrs</h4>
                    <p className='text-center'>Age</p>
                </div>

            </div>

            <div className='mt-5 '>
                <h4 className='px-3'>Add A Break</h4>
                <div className='btns mt-3 d-flex justify-content-center'>
                    <button onClick={() => BreakTimeSet(10)}>10s</button>
                    <button onClick={() => BreakTimeSet(20)}>20s</button>
                    <button onClick={() => BreakTimeSet(30)}>30s</button>
                    <button onClick={() => BreakTimeSet(40)}>40s</button>
                    <button onClick={() => BreakTimeSet(50)}>50s</button>
                </div>
            </div>

            <div className='mt-4 '>
                <h4 className='mx-3'>Exercise Details</h4>
                <Exercise_Time time={props.time}></Exercise_Time>
                <div className='d-flex justify-content-between mx-4  exercise-time p-2 mt-4 '>
                    <h5>Break time</h5>
                    <h5 className='mutedtext'>{breakTime} Second</h5>
                </div>

            </div>
            <div>
                <Button variant="primary" className='w-70 mt-5 mx-5' onClick={notify}>Activity Completed</Button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Sidebar;