import React from 'react';
import './Practice.css'

const Practice = (props) => {
    // console.log(props)
    const {img,activityName,activityTime}=props.exercises
    const {handleAddToList}=props

    return (
        <div className='practice-section'>
            <img src={img} alt=""></img>
            <div>
            <p className='activity-name'>Activity Name: {activityName}</p>
            <p>Activity Time: {activityTime} s</p>
            </div>
<button onClick={() =>handleAddToList(props)}  className='btn-cart'>
    <p>Add to List</p>
</button>
        </div>
    );
};

export default Practice;