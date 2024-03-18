

export default function TodoItem({ id, title, toggleTodo, deleteTodo }) {
    return (
    <>
        <li>
        <label>
            {title}
            <input
            type="checkbox"
            onChange={(e) => toggleTodo(id, e.target.checked)} // Pass id and checked state
            />
        </label>
        <button onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    </>
    );
}
