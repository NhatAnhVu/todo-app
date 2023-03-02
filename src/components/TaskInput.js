import React from "react";

const TaskInput = ({ theme, handleSubmit, input, setInput }) => {
  return (
    <div className={theme === "light" ? "task task-light": "task"}>
      <div className="checkbox"></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={input}
        className="inputTask"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleSubmit(e)}
      />
    </div>
  );
};

export default TaskInput;
