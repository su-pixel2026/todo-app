import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import TodoContext from './context/TodoContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import TodoDetail from './pages/TodoDetail'
import styles from './components/App.module.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }])
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
    <div className={styles.app}>
      <Navbar />
      <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </TodoContext.Provider>
    </div>
  )
}

export default App

