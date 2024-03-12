import React, { useState } from 'react'

export default function Todoform() {

    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
        setTodos((currentTodos) => {
            return [
                ...currentTodos, {
                    id: crypto.randomUUID(), title
                }
            ]
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if(newTodo === '') return
        addTodo(newTodo)
        setNewTodo('')
        }
    const deleteTodo =(id) => {
        setTodos(currentTodos => {
            return(
                currentTodos.filter(todo => todo.id != id)
            )
        })
    }
    

    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <label>Add Todo
                        <input type="text" 
                        onChange={(e) => setNewTodo(e.target.value)}
                        value={newTodo}
                        id='todo'/>
                    </label>
                </form>
            </div>
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
        </div>
    )
}
