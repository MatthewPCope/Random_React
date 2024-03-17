import React from 'react'
import { signal, computed } from "@preact/signals";

export default function SignalList() {

    const todos = signal([
        { text: "Buy groceries", completed: true },
        { text: "Walk the dog", completed: false },
    ]);
    
    const text = signal("");
    
    const completed = computed(() => {
        // When `todos` changes, this re-runs automatically:
        return todos.value.filter(todo => todo.completed).length;
    });

      // Logs: 1, because one todo is marked as being completed
    console.log(completed.value);

    function addTodo() {
    todos.value = [...todos.value, { text: text.value }];
    text.value = ""; // Clear input value on add
}

function removeTodo(todo) {
    todos.value = todos.value.filter(t => t !== todo);
}
const onInput = event => (text.value = event.currentTarget.value);


    return (
        <div>
            <input value={text.value} onInput={onInput} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.value.map(todo => (
                <li key={todo.id}>
                    {todo.text}{' '}
                    <button onClick={() => removeTodo(todo)}>❌</button>
                </li>
                ))}
            </ul>
    </div>
    )
}



