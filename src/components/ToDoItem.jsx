export const ToDoItem = ({ todo, index, onDelete, onPin }) => {
    const handlePin = () => onPin(index)
    const handleDelete = () => onDelete(index)
  
    return (
      <div className="todo-item">
        <div className={`todo-text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </div>
        <div className="todo-buttons">
          <button onClick={handlePin} className="toggle-button">
            {todo.completed ? "Cancel" : "Complete"}
          </button>
          <button onClick={handleDelete} className="delete-button">
          ❌ 
          </button>
        </div>
      </div>
    )
  }
  