import { tasks } from "./tasksData";

export async function GET() {
  return new Response(JSON.stringify({ data: tasks }), { status: 200 });
}

export async function POST(request) {
  const task = await request.json();
  const newTask = {
    title: task.title,
    id: tasks.length + 1,
    content: task.content,
  };
  tasks.push(newTask);
  return new Response(JSON.stringify(newTask), { status: 201 });
}

export async function PUT(request) {
  const task = await request.json();
  const existingTask = tasks.find((t) => t.id === task.id);
  if (existingTask) {
    existingTask.title = task.title;
    existingTask.content = task.content;
    return new Response(JSON.stringify(existingTask), { status: 200 });
  }
  return new Response(JSON.stringify({ message: "Task not found" }), { status: 404 });
}

export async function DELETE(request) {
  const { id } = await request.json();
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return new Response(JSON.stringify({ message: "Task deleted" }), { status: 200 });
  }
  return new Response(JSON.stringify({ message: "Task not found" }), { status: 404 });
}
