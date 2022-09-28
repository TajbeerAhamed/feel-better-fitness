import React, { useEffect, useState } from 'react';
import Practice from '../Practice/Practice';
import './Exercise.css'

const Exercise = () => {
    const [exercise,setExercise] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])
    return (
        <div className='exercise-section'>
          <div className="practice-section">
{
    exercise.map(exercises=><Practice
     key={exercises.id}
     exercises={exercises}
     ></Practice>)
}
          </div>
          <div className="details-section">
<h2>Details</h2>
          </div>
        </div>
    );
};

export default Exercise;