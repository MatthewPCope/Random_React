import TodoItem from "./TodoItem"

export default function TodoList({todos, deleteTodo, toggleTodo}) {

    const todoList = todos.value
    
    return (
        <div>
            <ul>
                {todoList && todoList.map((todo) => {
                    return (
                        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>                                )
                    }
                )}
            </ul>
        </div>
    )
}


