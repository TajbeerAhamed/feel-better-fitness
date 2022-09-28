import React, { useEffect, useState } from 'react';
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
<h1>{exercise.length}</h1>
          </div>
          <div className="details-section">
<h2>Details</h2>
          </div>
        </div>
    );
};

export default Exercise;