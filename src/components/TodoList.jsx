import TodoItem from "./TodoItem"

export default function TodoList({todos, deleteTodo, toggleTodo}) {

    
    
    return (
        <div>
            <ul>
                {todos.map(todo=> {
                    return (
                        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>                                )
                    }
                )}
            </ul>
        </div>
    )
}


