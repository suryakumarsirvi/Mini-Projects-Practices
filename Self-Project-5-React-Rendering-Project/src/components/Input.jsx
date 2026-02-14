import React from "react";

const Input = ({ type = "text", label, options = [] }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-zinc-600">
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          className="px-3 py-2 rounded-lg border border-zinc-300 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
          rows="3"
        />
      ) : type === "select" ? (
        <select
          className="px-3 py-2 rounded-lg border border-zinc-300 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
        >
          <option value="">Select category</option>
          {options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className="px-3 py-2 rounded-lg border border-zinc-300 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
        />
      )}
    </div>
  );
};

export default Input;
