import { useState, useEffect } from 'react'
import TodoInput from '../components/TodoInput'
import TodoItem from '../components/TodoItem'
import TodoStats from '../components/TodoStats'
import styles from '../components/App.module.css'

function Home() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  const addTodo = () => {
    if (text.trim() === '') return
    setTodos([...todos, { id: Date.now(), text, done: false }])
    setText('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <h1>Todo</h1>
      <TodoInput text={text} setText={setText} onAdd={addTodo} />
      <ul className={styles.list}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </ul>
      <TodoStats todos={todos} />
    </>
  )
}

export default Home
