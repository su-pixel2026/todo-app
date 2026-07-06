import styles from './TodoInput.module.css'


function TodoInput({ text, setText, onAdd }) {
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && onAdd()}
                placeholder="输入待办..."
            />
            <button className={styles.button} onClick={onAdd}>添加</button>
        </div>
    )
}

export default TodoInput
