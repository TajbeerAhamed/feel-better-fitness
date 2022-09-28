import React from 'react';
import './Practice.css'

const Practice = (props) => {
    console.log(props)
    const {img,activityName,activityTime}=props.exercises

    return (
        <div className='practice-section'>
            <img src={img} alt="" />
        </div>
    );
};

export default Practice;