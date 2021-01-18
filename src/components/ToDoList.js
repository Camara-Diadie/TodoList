import React from "react"
import ToDo from "./ToDo"
import "./todolist.css"

const ToDoList = ({ toDoList, handleToggle, handleDelete }) => {
  console.log(toDoList)
  return (
    <div className="teste">
      {toDoList &&
        toDoList.map((todo) => {
          return (
            <div className="">
              <ToDo
                todo={todo}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
              />
            </div>
          )
        })}
    </div>
  )
}

export default ToDoList
