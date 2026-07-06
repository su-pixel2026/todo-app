import styles from './TodoStats.module.css'


function TodoStats({ todos }) {
    const total = todos.length
    const completed = todos.filter(t => t.done).length
    return (
        <p className={styles.stats}>
            共 {total} 项，已完成 {completed} 项
        </p>
    )
}

export default TodoStats
