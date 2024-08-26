import { useState } from "react"
import { AddToDo } from "./AddToDo"
import { List } from "./List"

export const ToDoList = () => {
  const [todos, setTodo] = useState([
    { text: "Take a shower", completed: false },
    { text: "Drink a coffee", completed: false },
    { text: "Read a book(not Ninja)", completed: false },
    { text: "Check emails", completed: false },
    { text: "Clean the house", completed: false }
  ])
  const [error, setError] = useState("")

  const addToDo = (newToDo) => {
    if (newToDo.trim() !== "") {
      const newTodo = { text: newToDo, completed: false }
      setTodo([...todos, newTodo])
      setError("")
    } else {
      setError("Please fill the field")
    }
  }

 
  const deleteToDo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index)
    setTodo(updatedTodos)
  }


  const pinComp = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index
        ? { ...todo, completed: !todo.completed }
        : todo
    )
    setTodo(updatedTodos)
  }

  return  <div className="todo-container">
      <AddToDo 
        addTodo={addToDo} />
      <List
         todos={todos} 
         onDelete={deleteToDo}
         onPin={pinComp} />
      {error && <p className="error-message">{error}</p>}
    </div>
    
  
}
