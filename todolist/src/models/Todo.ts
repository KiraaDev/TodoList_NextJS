import { ITodo } from "@/app/types/ITodo";
import mongoose, { Schema, Document } from "mongoose";

const TodoSchema = new Schema({
    title: {
        type: String, 
        required: true 
    },
    body: {
        type: String, 
        required: true 
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.models.Todo || mongoose.model<ITodo>('Todo', TodoSchema);

export default Todo;