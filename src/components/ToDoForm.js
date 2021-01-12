import React, { useState } from "react"
import "./todo-form.css"

const ToDoForm = ({ handleAddTask }) => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddTask(userInput)
    setUserInput("")
  }
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        className="input-task"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button className="button-form">Submit</button>
    </form>
  )
}

export default ToDoForm
