import React from 'react';
import { signal } from '@preact/signals-react';



export default function TodoForm() {
  const newTodo = signal('')
  const todos =  signal([])
  

  const changeHandler = (e) => {
    newTodo.value = e.target.value
  }
  console.log(e.target.value)

  const addTodo = () => {
        todos.value = [...todos.value, { text: newTodo.value, 
        completed: false}]
        newTodo.value = ''
  }

  return (
    <div className="form">
      <h1>Daily To-Do List</h1>
      <div>
        
          <input
            type="text"
            placeholder="Add Todo"
            onChange={changeHandler}
            value={newTodo.value}
            
          />
          <button onClick={addTodo}>Add</button>
        
      </div>
      
    </div>
  );
}
