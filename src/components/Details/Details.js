import React, { useState } from 'react';
import './Details.css'

const Details = ({list}) => {
    // console.log(list)
    let activityTime=0
    for(const lists of list){
console.log(lists)
 activityTime=activityTime+lists.activityTime
    }
    // const [count,setCount] =useState([])
    // const displayCount = () =>{
    //     const newCount=
    
    return (
        <div className='list'>
            <h2 className='list-name'>Tajbeer Ahamed Rimon{list.length}</h2>
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
            <div className='btn'>
               <button  className='break-btn'>10s</button>
               <button className='break-btn'>20s</button>
               <button className='break-btn'>30s</button>
               <button className='break-btn'>40s</button>
            </div>

            <h2>Activity Details</h2>
            <h4>Activity Time: {activityTime} seconds</h4>
            <h4>Break Time: {} seconds</h4>
            <button className='activity-btn'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Details;