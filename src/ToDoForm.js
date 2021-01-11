import React, { useState } from "react"

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
    <form onSubmit={handleSubmit}>
      <input
        className="input-task"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button className="button">Submit</button>
    </form>
  )
}

export default ToDoForm
