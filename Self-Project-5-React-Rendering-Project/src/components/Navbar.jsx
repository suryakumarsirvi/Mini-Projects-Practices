import React from "react";
import Button from "./Button";
const Navbar = ({ renderCount }) => {
  return (
    <nav className="h-24 w-full flex items-center justify-between p-2">
      <div className="h-24 p-4">
        <img className="h-full w-full object-cover" src="public/2d702421b95d1e8910884cf0fe3af0b5-removebg-preview.png" alt="" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <Button className="px-4 py-1 rounded-md bg-black text-white font-semibold">
          <i className="ri-sun-fill font-extralight"></i>
          Light
        </Button>

        <h1 className="px-4 py-1 bg-zinc-100 border border-zinc-200 rounded-md">
          Render: <span className="font-semibold">{renderCount}</span>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
