import { dbConnection } from "@/app/_lib/dbconnection";
import { todoModel } from "@/app/_lib/models/todo";
import { validationSchema } from "./schema";

dbConnection();

export async function GET() {
  try {
    const todos = await todoModel.find();
    return new Response(JSON.stringify({ data: todos }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error getting Data" }));
  }
}
export async function POST(request) {
  const todo = await request.json();
  console.log(`request data ${todo}`);
  try {
    const validation=validationSchema.safeParse(todo)
    if(!validation.success){
        return new Response(JSON.stringify({ message: "validation error" }),{status:400});  
    }
    const newTodo = await todoModel.create(todo);
    return new Response(JSON.stringify({ data: newTodo }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error adding Data" }));
  }
}
