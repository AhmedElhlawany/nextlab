"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskContent, setTaskContent] = useState("");


  const addNewTask = async () => {
    await fetch(`http://localhost:3000/api/tasks`, {
      method: "POST",
      body: JSON.stringify({ title: taskTitle , content: taskContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    redirect('/tasks')
  };
  return (
    <div className="mb-3 ms-5">
      <label htmlFor="taskTitle" className="p-3">
        Task
      </label>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="p-1 border-1 m-2 rounded-lg"
        id="taskTitle"
        aria-describedby="taskTitle"
      />
      <label htmlFor="taskContent" className="p-3">
        Task Content
      </label>
      <input
        type="text"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        className="p-1 border-1 m-2 rounded-lg"
        id="taskContent"
        aria-describedby="taskContent"
      />
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => addNewTask()}>
        Add Task
      </button>
    </div>
  );
}