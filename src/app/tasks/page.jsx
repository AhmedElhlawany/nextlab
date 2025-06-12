"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TaskList() {
  const [tasksData, setTasksData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("/api/tasks");
        const data = await res.json();
        setTasksData(data.data); 
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    if (confirm("Are you sure you want to delete this task?")) {
      try {
        const res = await fetch("/api/tasks", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: taskId }),
        });

        if (res.ok) {
          setTasksData((prev) => prev.filter((task) => task.id !== taskId));
        } else {
          console.error("Failed to delete task");
        }
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  return (
    <>
      <Link
        href="/addtask"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mb-5 ms-5"
      >
        Add New Task
      </Link>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 mt-5">
        {tasksData.map((task) => (
          <div className="mb-4 border-1 rounded-lg p-3" key={task.id}>
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.content}</p>
            <button
              onClick={() => handleDelete(task.id)}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-900"
            >
              Delete
            </button>
            <Link
              href={`/edittask/${task.id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Edit
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
}
