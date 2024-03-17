import React, { useState } from 'react'
import TodoList from './TodoList'

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

    const toggleTodo = (id, completed) => {
        setTodos((currentTodos) => {
            return (
                currentTodos.map(todo => {
                    if (todo.id === id) {
                        return { ...todo, completed}
                    }
                    return todo
                })
            )
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
        <div className='form'>
            <h1>Daily To-Do List</h1>
            <div >
                <form onSubmit={submitHandler}>
                    
                        <input type="text" placeholder='Add Todo'
                        onChange={(e) => setNewTodo(e.target.value)}
                        value={newTodo}
                        id='todo'/>
                    
                <button>Add</button>
                </form>
            </div>
            <div>
                <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
                                
            </div>
        </div>
    )
}
