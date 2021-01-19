import React, { useState } from "react"

const userForm = ({ userForm }) => {
  const [user, setUser] = useState("")
  return (
    <form onSubmit={handleSubmit}>
      <input value={userInput} type="text" placeholder="Enter task..." />
      <button>Submit</button>
    </form>
  )
}
export default userForm
