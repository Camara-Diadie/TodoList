const ToDo = ({ todo, handleToggle }) => {
  const onTodoClick = () => handleToggle(todo.id)

  return (
    <div onClick={onTodoClick} className={todo.complete ? "strike" : ""}>
      {todo.task}
    </div>
  )
}
export default ToDo
