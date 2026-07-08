import { useState, useContext } from 'react'
import TodoContext from '../context/TodoContext'
import TodoInput from '../components/TodoInput'
import TodoItem from '../components/TodoItem'
import TodoStats from '../components/TodoStats'
import styles from '../components/App.module.css'

function Home() {
  const [text, setText] = useState('')
  const { todos, addTodo} = useContext(TodoContext)

  const handleAdd = () => {
    if (text.trim() === '') return
    addTodo(text)
    setText('')
  }

  return (
    <>
      <h1>Todo</h1>
      <TodoInput text={text} setText={setText} onAdd={handleAdd} />
      <ul className={styles.list}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <TodoStats />
    </>
  )
}

export default Home
