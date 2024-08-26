import { useState } from "react"

export const AddToDo = ({ addTodo }) => {
  const [newToDo, setNewToDo] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!newToDo.trim()) {
      return setError("Please enter a todo")
    }
    setError("")
    addTodo(newToDo)
    setNewToDo("")
  }

  return (
    <div className="add-todo-container">
      <h3>What will you accomplish today?</h3>
      <form onSubmit={handleSubmit} className="add-todo-form">
        {error && <p className="error-message">{error}</p>}
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your next achievement"
            value={newToDo}
            onChange={(e) => setNewToDo(e.target.value)}
            className="todo-input"
          />
        </div>
        <div className="button-container">
          <button type="submit" className="add-button">Hit Me to Add</button>
        </div>
      </form>
    </div>
  )
  
}
