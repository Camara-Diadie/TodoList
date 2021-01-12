import "./todo.css"

const ToDo = ({ todo, handleToggle, handleDelete }) => {
  const onTodoClick = () => handleToggle(todo.id)
  const onDeleteTodoClick = () => handleDelete(todo.id)
  return (
    <div className="task-ligne">
      <div onClick={onTodoClick} className={todo.complete ? "strike" : ""}>
        {todo.task}
      </div>
      <button className="button-Delete" onClick={onDeleteTodoClick}>
        +
      </button>
    </div>
  )
}
export default ToDo
