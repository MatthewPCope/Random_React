import { useState } from "react"


export default function Counter() {

    const [count, setCount] = useState(0)
    return (
        <div className="counter">
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
