import React from 'react'
import { ITodo } from '@/app/types/ITodo'

const TodoCard: React.FC<{todo: ITodo}> = ({ todo }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 m-4 shadow-lg bg-white">
            <h2 className="text-xl font-bold mb-2">{todo.title}</h2>
            <p className="text-gray-700 mb-2">{todo.body}</p>
            <p className="text-gray-500 text-sm">{new Date(todo.dateCreated).toLocaleDateString()}</p>
        </div>
    )
}

export default TodoCard