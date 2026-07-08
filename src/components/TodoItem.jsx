import { useContext } from 'react'
import { Link } from 'react-router-dom'
import TodoContext from '../context/TodoContext'
import styles from './TodoItem.module.css'

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useContext(TodoContext)

  return (
    <li className={`${styles.item} ${todo.done ? styles.done : ''}`}>
      <Link className={styles.text} to={`/todo/${todo.id}`}>{todo.text}</Link>
      <button className={styles.toggleBtn} onClick={() => toggleTodo(todo.id)}>
        {todo.done ? '✓ 完成' : '○ 未完成'}
      </button>
      <button className={styles.deleteBtn} onClick={() => deleteTodo(todo.id)}>删除</button>
    </li>
  )
}

export default TodoItem
