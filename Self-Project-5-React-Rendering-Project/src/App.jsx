import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import TaskCard from "./components/TaskCard";
import Form from "./components/Form";
import SearchBar from "./components/SearchBar";

const App = () => {
  const renderCount = useRef(0);
  renderCount.current++;

  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((data) => {
    const newTask = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      priority: data.priority,
      completed: false,
      time: 0,
      running: false,
    };
    

    setTasks((prev) => [...prev, newTask]);
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const toggleComplete = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const toggleStart = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, running: !task.running } : task
      )
    );
  }, []);

  const filteredTasks = useMemo(() => {
    let result = tasks;

    if (filter === "active") {
      result = result.filter((t) => !t.completed);
    } else if (filter === "completed") {
      result = result.filter((t) => t.completed);
    }

    if (search.trim() !== "") {
      result = result.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return result;
  }, [tasks, search, filter]);

  const totalTime = useMemo(
    () => tasks.reduce((acc, task) => acc + task.time, 0),
    [tasks]
  );

  const avgTime = useMemo(() => {
    return tasks.length ? Math.floor(totalTime / tasks.length) : 0;
  }, [tasks.length, totalTime]);

  const completionRate = useMemo(() => {
    return tasks.length
      ? Math.floor(
          (tasks.filter((t) => t.completed).length / tasks.length) * 100
        )
      : 0;
  }, [tasks]);

  return (
    <div className="w-2/3 mx-auto min-h-screen">
      <Navbar renderCount={renderCount.current}/>

      <div className="flex mt-6 flex-wrap gap-4 justify-center">
        <StatsCard Text="Total Tasks" value={tasks.length} Color="border-blue-300" />
        <StatsCard
          Text="Active"
          value={tasks.filter((t) => !t.completed).length}
          Color="border-violet-300"
        />
        <StatsCard
          Text="Completed"
          value={tasks.filter((t) => t.completed).length}
          Color="border-[#7D4C2D]"
        />
        <StatsCard Text="Total Time" value={totalTime} Color="border-pink-300" />
        <StatsCard Text="Avg/Task" value={avgTime} Color="border-[#EB6303]" />
        <StatsCard
          Text="Completion %"
          value={`${completionRate}%`}
          Color="border-[#8C02DA]"
        />
      </div>

      <Form addTask={addTask} />

      <SearchBar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <div className="flex gap-4 flex-wrap items-center justify-left w-[90%] mx-auto my-6">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              toggleStart={toggleStart}
              setTasks={setTasks}
            />
          ))
        ) : (
          <p className="text-center text-sm text-zinc-500 py-20 w-full">
            No Task Found
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
