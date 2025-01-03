import db from "@/lib/mongodb";
import Todo, { saveToDatabase } from "@/models/Todo";
import { NextRequest, NextResponse } from "next/server";
import { ITodo } from "@/app/types/ITodo";

export async function GET() {
    await db;

    try {
        const todos = await Todo.find({});

        return NextResponse.json(todos);

    } catch (error) {
        return NextResponse.json({ message: "Error fetching todos" }, { status: 500 });
    }
}

export async function POST(request: Request) {

    try {

        const data = await request.json();

        const { title, body } = data;

        if (!title || !body) {
            return NextResponse.json({ error: 'Title and body are required' }, { status: 400 });
        }

        const newTodo: ITodo = {
            title,
            body,
            dateCreated: new Date(),
        };
    
        const savedPost = await saveToDatabase(newTodo)

        return NextResponse.json({ message: "Post created successfully", data: savedPost });
    
    } catch (error) {
        return NextResponse.json({ message: "Error adding todo" }, { status: 500 });
    }
}
