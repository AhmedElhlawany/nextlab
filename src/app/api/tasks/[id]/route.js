import { tasks } from "../tasksData";

export async function GET(request, { params }) {
  const taskId = parseInt(params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return new Response(JSON.stringify({ message: "Task not found" }), { status: 404 });
  }

  return new Response(JSON.stringify(task), { status: 200 });
}

export async function PUT(request, { params }) {
  const taskId = parseInt(params.id);
  const updatedData = await request.json();

  let task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.title = updatedData.title;
    task.content = updatedData.content;
    return new Response(JSON.stringify(task), { status: 200 });
  }

  return new Response(JSON.stringify({ message: "Task not found" }), { status: 404 });
}
