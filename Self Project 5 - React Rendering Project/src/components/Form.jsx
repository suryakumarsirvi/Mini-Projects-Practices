import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

const Form = ({ addTask }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addTask(data);
    reset();
  };

  return (
    <div className="w-[90%] mx-auto mt-8 bg-white p-6 rounded-md border border-zinc-300 space-y-5">
      <h1 className="text-xl font-semibold text-zinc-800">
        Add Task
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("title", { required: true })}
          placeholder="Task Title"
          className="w-full px-3 py-2 rounded-lg border border-zinc-300"
        />

        <textarea
          {...register("description")}
          placeholder="Task Description"
          rows="3"
          className="w-full px-3 py-2 rounded-lg border border-zinc-300"
        />

        <select
          {...register("priority")}
          className="w-full px-3 py-2 rounded-lg border border-zinc-300"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <Button className="bg-violet-600 text-white px-4 py-2 rounded-lg">
          Create Task
        </Button>
      </form>
    </div>
  );
};

export default Form;
