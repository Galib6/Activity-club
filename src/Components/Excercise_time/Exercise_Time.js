import React from 'react';

const Exercise_Time = (props) => {

    console.log(props.time)

    return (
        <div className='d-flex justify-content-between align-items-center mx-4 exercise-time p-2 border border-primary' >
            <h5>Exercise time</h5>
            <h5 className='mutedtext'>{props.time} Second</h5>
        </div >
    );
};

export default Exercise_Time;