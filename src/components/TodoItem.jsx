function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <li className={todo.done ? 'done' : ''}>
        <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
        <button onClick={() => onDelete(todo.id)}>删除</button>
      </li>
    )
  }
  
  export default TodoItem
  