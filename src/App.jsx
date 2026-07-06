import { useState, useEffect } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import TodoInput from './components/TodoInput'
import TodoStats from './components/TodoStats'


function App() {

  const [text, setText] = useState('')

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })


  const addTodo = () => {
    if (text.trim() === '') return
    const newTodo = { id: Date.now(), text, done: false }
    setTodos([...todos, newTodo])
    setText('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="app">
      <h1>Todo</h1>
      <TodoInput text={text} setText={setText} onAdd={addTodo} />
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </ul>
      <TodoStats todos={todos} />
    </div>
  )


}

export default App
