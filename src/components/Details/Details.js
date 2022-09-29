import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Details.css";

const Details = ({ list }) => {
  // console.log(list)
  let activityTime = 0;
  for (const lists of list) {
    console.log(lists);
    activityTime = activityTime + lists.exercises.activityTime;
  }
  const breakTime=parseInt(localStorage.getItem("breakTime"))
  const [count, setCount] = useState(breakTime || 0);

  const setBreakTime = (time) => {
    setCount(time);
    localStorage.setItem("breakTime", time);
  };

  return (
    <div className="list">
      <h2 className="list-name">Tajbeer Ahamed Rimon</h2>
      <div className="list-details">
        <div className="list-info">
          <h3>69kg</h3>
          <p>Weight </p>
        </div>
        <div className="list-info">
          <h3>5.4</h3>
          <p>Height</p>
        </div>
        <div className="list-info">
          <h3>20</h3>
          <p>Age </p>
        </div>
      </div>
      <h2>Add a Break</h2>
      <div className="btn">
        <button onClick={() => setBreakTime(10)} className="break-btn">
          10s
        </button>
        <button onClick={() => setBreakTime(20)} className="break-btn">
          20s
        </button>
        <button onClick={() => setBreakTime(30)} className="break-btn">
          30s
        </button>
        <button onClick={() => setBreakTime(40)} className="break-btn">
          40s
        </button>
      </div>

      <h2>Activity Details</h2>
      <h4>Activity Time: {activityTime} seconds</h4>
      <h4>Break Time: {count} seconds</h4>
      <button onClick={() => toast.success("Congrats you have done the activity")} className="activity-btn">
        Activity Completed
      </button>
    </div>
  );
};

export default Details;
