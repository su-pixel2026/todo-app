function TodoInput({ text, setText, onAdd }) {
    return (
      <div className="input-area">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onAdd()}
          placeholder="输入待办..."
        />
        <button onClick={onAdd}>添加</button>
      </div>
    )
  }
  
  export default TodoInput
  