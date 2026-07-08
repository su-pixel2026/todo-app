import { useContext } from 'react'
import TodoContext from '../context/TodoContext'
import styles from './TodoStats.module.css'

function TodoStats() {
  const { todos } = useContext(TodoContext)
  const completed = todos.filter(t => t.done).length

  return (
    <p className={styles.stats}>
      共 {todos.length} 项，已完成 {completed} 项
    </p>
  )
}

export default TodoStats
