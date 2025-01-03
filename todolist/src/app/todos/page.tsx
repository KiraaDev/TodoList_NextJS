'use client'
import React, { useEffect, useState } from "react";
import { ITodo } from "../types/ITodo";
import TodoCard from "@/components/TodoCard";

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
                        <TodoCard
                            key={index}
                            todo={todo}
                        />
                    ))}
            </div>
        </>
    )
}

export default Todos;
