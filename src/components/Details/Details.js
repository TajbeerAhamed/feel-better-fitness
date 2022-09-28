import React from 'react';
import './Details.css'

const Details = ({list}) => {
    console.log(list)
    let activityTime=0
    for(const lists of list){
 activityTime=activityTime+lists.activityTime
    }
    return (
        <div className='list'>
            <h1>Tajbeer Ahamed Rimon</h1>
            <div className='list-details'>
                <div className='list-info'>
                <h3>69kg</h3>
                <p>Weight </p>
                </div>
                <div className='list-info'>
                <h3>5.4</h3>
                <p>Height</p>
                </div>
                <div className='list-info'>
                <h3>20</h3>
                <p>Age </p>
                </div>
            </div>
            <h2>Add a Break</h2>
            <div >
               <button className='break-btn'>10s</button>
               <button className='break-btn'>20s</button>
               <button className='break-btn'>30s</button>
               <button className='break-btn'>40s</button>
            </div>

            <h2>Activity Details</h2>
            <h4>Activity Time: {activityTime}</h4>
            <h4>Break Time: {}</h4>
            <button className='activity-btn'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Details;