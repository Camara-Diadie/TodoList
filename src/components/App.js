import React, { useState, useEffect } from "react"

import data from "../data.json"

//components
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
      console.log(toDoList)
    } else {
      // const toDoList = localStorage.getItem("toDoList")
      setToDoList(JSON.parse(toDoList))
    }

    // Checker si todolist est null
    // Si c'est null, set la todolist avec le data.json
    // localStorage.setItem("toDoList", JSON.stringify(data))

    // Si il y a des données dans le localStorage, alors les afficher, set todolist avec ces donnés
  }, [])
  console.log(toDoList)

  useEffect(() => {}, [toDoList])

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
