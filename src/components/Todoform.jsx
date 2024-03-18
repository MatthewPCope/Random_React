import { signal } from '@preact/signals';
// import TodoList from './TodoList';

export default function Todoform() {
    const newTodo = signal("")
    const todos = signal([])

    

    const addTodo = () => {
        todos.value = [...todos.value, { newTodo: newTodo.value }];
        newTodo.value = ""; // Reset input value on add
    }

    // const toggleTodo = (id, completed) => {
    //     todos.value = (
    //         todos.value.map(todo => {
    //             if (todo.id === id) {
    //                 return { ...todo, completed };
    //             }
    //             return todo;
    //         })
    //     );
    // };

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     if (newTodo.value === '') return;
    //     addTodo(newTodo.value);
    //     newTodo.value = ('');
    // };

    const removeTodo = (id) => {
        todos.value = (
            todos.value.filter(todo => todo.id !== id)
        );
    };

    return (
        <>
            <input value={newTodo.value} onChange={(e) => (newTodo.value = e.target.value)} />
            <button onClick={addTodo}>Add</button>
                <ul>
                    {todos.value.map(todo => (
                    <li>
                        {todo.newTodo}{' '}
                        <button onClick={() => removeTodo(todo)}>❌</button>
                    </li>
                    ))}
                </ul>
        </>
    );
}
