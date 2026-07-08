import { useParams, useNavigate } from 'react-router-dom'
import styles from '../components/App.module.css'

function TodoDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const saved = localStorage.getItem('todos')
  const todos = saved ? JSON.parse(saved) : []
  const todo = todos.find(t => String(t.id) === id)

  if (!todo) {
    return (
      <div className={styles.app}>
        <p>未找到该待办事项。</p>
        <Link to="/">返回首页</Link>
      </div>
    )
  }

  return (
    <div className={styles.app}>
      <h1>待办详情</h1>
      <p><strong>内容：</strong> {todo.text}</p>
      <p><strong>状态：</strong> {todo.done ? '已完成' : '未完成'}</p>
      <p><strong>创建时间：</strong> {new Date(todo.id).toLocaleString()}</p>
      <button onClick={() => navigate('/')}>← 返回首页</button>
      {/* <Link to="/">← 返回首页</Link> */}
    </div>
  )
}

export default TodoDetail
