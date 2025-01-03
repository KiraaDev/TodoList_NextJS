import db from "@/lib/mongodb";
import Todo from "@/models/Todo";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await db;

    try {
        const todos = await Todo.find({});
        
        if (!todos || todos.length === 0) {
            return NextResponse.json({ message: "No todos found" }, { status: 200 });
        }

        return NextResponse.json(todos);
    } catch (error) {
        return NextResponse.json({ message: "Error fetching todos" }, { status: 500 });
    }
}
