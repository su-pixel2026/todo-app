import styles from './TodoItem.module.css'


function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li className={`${styles.item} ${todo.done ? styles.done : ''}`}>
            <span className={styles.text} onClick={() => onToggle(todo.id)}>{todo.text}</span>
            <button className={styles.deleteBtn} onClick={() => onDelete(todo.id)}>删除</button>
        </li>
    )
}

export default TodoItem
