import React, { useCallback } from "react";

const SearchBar = ({ search, setSearch, filter, setFilter }) => {
  const filters = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  const handleSearch = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  const handleFilter = useCallback(
    (value) => {
      setFilter(value);
    },
    [setFilter]
  );

  return (
    <div className="w-[90%] mx-auto mt-6 bg-white p-4 rounded-xl border border-zinc-200 flex flex-col sm:flex-row items-center gap-4">
      
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={handleSearch}
        className="flex-1 px-4 py-2 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />

      <div className="flex gap-2">
        {filters.map((item) => (
          <button
            key={item.value}
            onClick={() => handleFilter(item.value)}
            className={`px-4 py-2 rounded-lg text-sm transition ${
              filter === item.value
                ? "bg-violet-600 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(SearchBar);
