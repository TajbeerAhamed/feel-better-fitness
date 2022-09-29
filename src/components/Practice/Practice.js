import React from "react";
import "./Practice.css";

const Practice = (props) => {
  // console.log(props)
  const { img, activityName, activityTime } = props.exercises;
  const { handleAddToList } = props;

  return (
    <div className="practice-card">
      <img src={img} alt=""></img>
      <div className="activity-details">
        <p className="activity-name"> Activity Name {activityName}</p>
        <p className="activity-time">Activity Time: {activityTime} s</p>
      </div>
      <button onClick={() => handleAddToList(props)} className="btn-cart">
        Add to List
      </button>
    </div>
  );
};

export default Practice;
