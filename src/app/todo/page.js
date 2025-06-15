import Link from "next/link";
import React from "react";

export default async function TodoList() {
  let res = await fetch("http://localhost:3000/api/todo");
  let { data: allTodos } = await res.json();
  console.log("Fetched todos:", allTodos);
  
  return (
    <>
    <Link href="/todo/add" className="bg-blue-500 text-white p-2 rounded-lg">
      Add Todo
    </Link>
      {allTodos.map((todo) => (
        <div key={todo._id}>
          <h2>{todo.title}</h2>
          <p>{todo.status}</p>
        </div>
      ))}
    </>
  );
}
