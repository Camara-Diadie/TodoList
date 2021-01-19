import React, { useState, useEffect } from "react"

import data from "../data.json"

import Header from "../components/Header"
import ToDoList from "../components/ToDoList"
import ToDoFrom from "./ToDoForm"

import "./App.css"

function App() {
  const [toDoList, setToDoList] = useState(null)
  useEffect(() => {
    const toDoList = localStorage.getItem("toDoList")

    if (toDoList === null) {
      localStorage.setItem("toDoList", JSON.stringify(data))
      const toDoList = localStorage.getItem("toDoList")
      setToDoList(JSON.parse(toDoList))
    } else {
      setToDoList(JSON.parse(toDoList))
    }
  }, [])

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
    localStorage.setItem("toDoList", JSON.stringify(filtered))

    setToDoList(filtered)
  }
  const handleAddTask = (userInput) => {
    let copy = [...toDoList]
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ]
    localStorage.setItem("toDoList", JSON.stringify(copy))
    setToDoList(copy)
  }

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
