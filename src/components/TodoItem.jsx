export default function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <>
            <li>
                <label>{title}
                    <input type="checkbox" checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}/>
                </label>
                <button onClick={() => deleteTodo(id)}>Delete</button>
            </li>
        </>
    )
}
