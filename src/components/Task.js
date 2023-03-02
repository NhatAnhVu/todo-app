import React from "react";
import crossIcon from "../images/icon-cross.svg";
import checkIcon from "../images/icon-check.svg";

const Task = ({ theme, task, handleTaskDelete, handleTaskCheck }) => {
  return (
    <div className={theme === "light" ? "task task-light" : "task"}>
      <div
        className={task.isCompleted ? "checkbox checkbox-checked" : "checkbox"}
        onClick={handleTaskCheck}
      >
        <img
          src={checkIcon}
          alt=""
          style={task.isCompleted ? { display: "block" } : { display: "none" }}
        />
      </div>
      <span className={task.isCompleted ? "detail detail-checked" : "detail"}>
        {task.task}
      </span>
      <button className="deleteButton" onClick={handleTaskDelete}>
        <img src={crossIcon} alt="" />
      </button>
    </div>
  );
};

export default Task;
