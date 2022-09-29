import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import Practice from "../Practice/Practice";
import "./Exercise.css";

const Exercise = () => {
  const [exercise, setExercise] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setExercise(data));
  }, []);

  const handleAddToList = (exercise) => {
    console.log(exercise);
    const newList = [...list, exercise];
    setList(newList);
  };
  return (
    <div className="exercise-section">
      <div className="practice-section">
        {exercise.map((exercises) => (
          <Practice
            key={exercises.id}
            exercises={exercises}
            handleAddToList={handleAddToList}
          ></Practice>
        ))}
      </div>
      <div className="details-section">
        <Details list={list}></Details>
      </div>
    </div>
  );
};

export default Exercise;
