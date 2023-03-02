import Task from "./Task";

const TaskList = ({ theme, taskList, handleTaskDelete, handleTaskCheck }) => {
  return (
    <div className="tasklist">
      {taskList
        .sort((a, b) => b.date - a.date)
        .map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              theme={theme}
              handleTaskDelete={() => handleTaskDelete(task)}
              handleTaskCheck={() => handleTaskCheck(task)}
            />
          );
        })}
    </div>
  );
};

export default TaskList;
