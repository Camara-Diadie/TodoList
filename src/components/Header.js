import React, { useState } from "react"
import "./header.css"

const Header = ({}) => {
  const [userName, setUserName] = useState("")

  const handleChange = (e) => {
    setUserName(e.currentTarget.value)
  }

  const handleSubmitUser = (e) => {
    e.preventDefault()
    setUserName("")
  }
  return (
    <div className="header">
      <form className="form-header" onSubmit={handleSubmitUser}>
        <input
          value={userName}
          type="text"
          onChange={handleChange}
          placeholder="Enter y Name..."
        />
        <button className="button-header">Submit</button>
      </form>
      <div className="title-user">Bienveu sur la ToDoList de {userName}</div>
    </div>
  )
}
export default Header
