
import { signal, computed } from "@preact/signals-react"



export default function SignalList() {
    const todos = signal([
        { text: "Write my first post", completed: true },
        { text: "Buy new groceries", completed: false },
        { text: "Walk the dog", completed: false },
      ]);
      
      const completedCount = computed(() => {
        return todos.value.filter(todo => todo.completed).length;
      });
      
      const newItem = signal("");
      
      function addTodo() {
        todos.value = [...todos.value, { text: newItem.value, completed: false }];
        newItem.value = ""; // Reset input value on add
      }
      
    //   function removeTodo(index) {
    //     todos.value.splice(index, 1)
    //     todos.value = [...todos.value];
    //   }
  const onInput = event => (newItem.value = event.target.value);

  const changeHandler = (e) => {
    newItem.value = ({
        ...newItem.value,
        [e.target.name]: e.target.value
    })
}

  return (
    <>
      <input type="text" value={newItem.value} onInput={onInput} />
      <button onClick={addTodo}>Add</button>
      
      <p>Completed count: {completedCount.value}</p>
    </>
  );
}

