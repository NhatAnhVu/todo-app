import taskService from "../services/taskService";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import Navbar from "../components/Navbar";

const Home = ({theme, handleChangeTheme}) => {
  const [input, setInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [filteredTaskList, setFilteredTaskList] = useState([]);
  const [filteredBy, setFilteredBy] = useState("all");

  useEffect(() => {
    (async () => {
      const data = await taskService.getTasks();
      setTaskList(data.docs.map((doc) => doc.data()));
      setFilteredTaskList(data.docs.map((doc) => doc.data()));
    })();
  }, []);

  const getActiveTaskList = () => {
    return taskList.filter((task) => task.isCompleted === false);
  };

  const getCompletedTaskList = () => {
    return taskList.filter((task) => task.isCompleted === true);
  };

  const handleTaskFilter = (type) => {
    setFilteredBy(type);
    if (type === "all") {
      setFilteredTaskList(taskList);
    }
    if (type === "completed") {
      const completedTaskList = getCompletedTaskList();
      setFilteredTaskList(completedTaskList);
    }
    if (type === "active") {
      const activeTaskList = getActiveTaskList();
      setFilteredTaskList(activeTaskList);
    }
  };

  const handleTaskCheck = async (task) => {
    await taskService.updateTask(task, {
      isCompleted: !task.isCompleted,
    });
    const updatedTask = taskList.find((item) => item.id === task.id);
    updatedTask.isCompleted = !updatedTask.isCompleted;
    const updatedTaskList = taskList.filter((item) => item.id !== task.id);
    setFilteredTaskList([...updatedTaskList, updatedTask]);
  };

  const handleTaskDelete = async (task) => {
    await taskService.deleteTask(task);
    const newTaskList = taskList.filter((item) => item.id !== task.id);
    setFilteredTaskList(newTaskList);
    setTaskList(newTaskList);
  };

  const handleCompletedTaskDelete = () => {
    const taskListCompleted = getCompletedTaskList();
    const taskListActive = getActiveTaskList();

    taskListCompleted.forEach((task) => taskService.deleteTask(task));
    setFilteredTaskList(taskListActive);
    setTaskList(taskListActive);
  };

  const handleSubmit = async (event) => {
    if (event.key === "Enter") {
      const newTask = {
        task: input,
        isCompleted: false,
        date: new Date(),
      };

      const { id } = await taskService.addTask(newTask);
      const newTaskWithId = { ...newTask, id };
      await taskService.updateTask(newTaskWithId, { id });
      setInput("");
      setTaskList([...taskList, newTaskWithId]);
      setFilteredTaskList([...taskList, newTaskWithId]);
    }
  };

  return (
    <div className="container">
      <Header theme={theme} handleChangeTheme={handleChangeTheme}/>
      <TaskInput
        input={input}
        theme={theme}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
      {filteredTaskList.length !== 0 ? (
        <TaskList
          theme ={theme}
          taskList={filteredTaskList}
          handleTaskCheck={handleTaskCheck}
          handleTaskDelete={handleTaskDelete}
        />
      ) : (
        <div className="tasklist">
          <div className="task">
          <p>{`No ${filteredBy === "all" ? "" : filteredBy} task to show`}</p>
          </div>
        </div>
      )}
      <Navbar
        taskList={taskList}
        filteredBy={filteredBy}
        theme={theme}
        handleTaskFilter={handleTaskFilter}
        handleCompletedTaskDelete={handleCompletedTaskDelete}
      />
    </div>
  );
};

export default Home;
