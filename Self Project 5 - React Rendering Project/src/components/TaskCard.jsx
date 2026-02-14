import React, { useEffect } from "react";

const TaskCard = ({
  task,
  deleteTask,
  toggleComplete,
  toggleStart,
  setTasks,
}) => {
  useEffect(() => {
    let interval;

    if (task.running) {
      interval = setInterval(() => {
        setTasks((prev) =>
          prev.map((t) => t.id === task.id ? { ...t, time: t.time + 1 } : t)
        );
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [task.running]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const priorityColor = task.priority === "High"
    ? "bg-red-100 text-red-600"
    : task.priority === "Medium"
    ? "bg-yellow-100 text-yellow-600"
    : "bg-green-100 text-green-600";

  return (
    <div className="w-50 mx-auto bg-white border border-zinc-300 rounded-xl p-4 relative shadow-sm">
      {/* Delete Button */}
      <button
        onClick={() => deleteTask(task.id)}
        className="absolute top-2 right-2 text-zinc-400 hover:text-red-500"
      >
        ✕
      </button>

      {/* Checkbox */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        className="mb-2"
      />

      {/* Title */}
      <h2
        className={`text-lg font-semibold ${
          task.completed ? "line-through text-zinc-400" : ""
        }`}
      >
        {task.title}
      </h2>

      {/* Description */}
      <p
        className={`text-sm mt-1 ${
          task.completed ? "line-through text-zinc-400" : ""
        }`}
      >
        {task.description}
      </p>

      {/* Priority */}
      <span
        className={`inline-block mt-3 px-3 py-1 text-xs rounded-full ${priorityColor}`}
      >
        {task.priority}
      </span>

      <div className="flex items-center justify-between">
        {/* Timer */}
        <div className="mt-4 text-xl font-mono">
          {formatTime(task.time)}
        </div>

        {/* Start Button */}
        <button
          onClick={() => toggleStart(task.id)}
          className="mt-3 bg-violet-600 text-white px-4 py-1 rounded-md hover:bg-violet-700"
        >
          {task.running ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default React.memo(TaskCard);
