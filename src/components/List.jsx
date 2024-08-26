import { ToDoItem } from "./ToDoItem"

export const List = ({ todos, onDelete, onPin }) => {
    return (
        <div className="todo-list">
          {todos.map((todo, index) => (
            <ToDoItem
              key={index}
              todo={todo}
              index={index}
              onDelete={onDelete}
              onPin={onPin}
            />
          ))}
        </div>
      )
      



}
