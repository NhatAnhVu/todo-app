import React, { useState } from 'react'

const Navbar = ({ theme, filteredBy, taskList, handleTaskFilter, handleCompletedTaskDelete }) => {

  const taskListActive = taskList.filter(task => task.isCompleted === false)

  return (
    <div className={theme === "light" ? "navbar navbar-light": "navbar"}>
      <span>{taskListActive.length > 1 ? `${taskListActive.length} items left` : `${taskListActive.length} item left`}</span>
      <div className="filter">
        <button className={filteredBy === "all" ? "clicked navbarButton" : "navbarButton"}
          onClick={() => {
            handleTaskFilter("all")
          }}>
          All
        </button>
        <button className={filteredBy === "active" ? "clicked navbarButton" : "navbarButton"}
          onClick={() => {
            handleTaskFilter("active")
          }}>
          Active
        </button>
        <button className={filteredBy === "completed" ? "clicked navbarButton" : "navbarButton"}
          onClick={() => {
            handleTaskFilter("completed")
          }}>
          Completed
        </button>
      </div>
      <button className='navbarButton' onClick={handleCompletedTaskDelete}>Clear Completed</button>
    </div>
  )
}

export default Navbar