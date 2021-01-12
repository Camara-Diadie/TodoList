import React, { useState, useEffect } from "react"

import data from "../data.json"

//components
import Header from "../components/Header"
import ToDoList from "../components/ToDoList"
import ToDoFrom from "./ToDoForm"
import userForm from ".."
import "./App.css"

function App() {
  useEffect(() => {
    const toDoList = localStorage.getItem("toDoList")
    console.log(toDoList)
  }, [])
  const [toDoList, setToDoList] = useState(data)
  console.log(data)

  useEffect(() => {
    localStorage.getItem("toDoList", toDoList)
  }, [toDoList])

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task }
    })
    setToDoList(mapped)
  }
  const handleDelete = (id) => {
    let filtered = toDoList.filter((task) => {
      return task.id !== id
    })
    setToDoList(filtered)
  }
  const handleAddTask = (userInput) => {
    let copy = [...toDoList]
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ]
    setToDoList(copy)
  }
  /*  const handleUser = (userName) => {} */

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
      <ToDoFrom handleAddTask={handleAddTask} />
    </div>
  )
}

export default App
