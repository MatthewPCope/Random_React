

export default function TodoList({todos, deleteTodo}) {

    
    
    
    return (
        <div>
            <ul>
                    <li>
                        {todos.map(
                            todo=> {
                                return (
                                    <li key={todo.id}>{todo.title}<button onClick={() => deleteTodo(todo.id)}>delete</button></li>
                                    )
                                }
                                )}
                    </li>
                </ul>
        </div>
    )
}
