// import React from 'react'

import { useCallback, useState } from "react"
import TodoB from "./TodoB"

function TodoA() {
    const [count, setcount] = useState(0);
    const [todo, setTodo] = useState([]);


    const addTodo = useCallback(() => {
        setTodo((prevTodo) => [...prevTodo, 'new Entry']);
    }, [todo]);

    const incriment = () => {
        setcount(prevCount => prevCount + 1)
    };

    return (
        <>
            <TodoB todo={todo} addTodo={addTodo} />
            <button onClick={incriment}>count</button>
            <p>{count}</p>
        </>
    )
}
export default TodoA