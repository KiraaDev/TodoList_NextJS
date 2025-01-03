'use client'
import React, { useEffect, useState } from "react";
import { ITodo } from "../types/ITodo";

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const res = await fetch("/api/data");
            const data = await res.json();

            if (!res.ok) {
                throw new Error("Failed to fetch todos");
            }

            setTodos(data);
        };

        fetchTodos();
    }, []);

    return (
        <>
            <div >
                <h1>Todos</h1>
                {todos.length === 0 ? 'No todos' :
                    todos.map((todo: ITodo, index: number) => (
                        <div key={index}>
                            <h1>{todo.title}</h1>
                            <p>{todo.body}</p>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Todos;
