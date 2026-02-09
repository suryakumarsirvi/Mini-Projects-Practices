import React, { useState } from "react";

const Card3 = () => {

    let [Text, setText] = useState("Co-worker");

    const changeText = ()=>{
        setText("Admin");
    }
    return (
        <div className="bg-amber-400 rounded-lg p-2 overflow-hidden">
            <h1 className="text-xl text-white font-semibold">
                User Card
            </h1>
            <div className="h-full flex items-center justify-center flex-col gap-6">
                <h1 className="text-2xl text-white text-center">
                    Name: <span className="font-extralight">Suryakumar Sirvi</span>
                </h1>
                <p className="text-xs text-white font-semibold px-4 py-1 bg-white/50 rounded-md">{Text}</p>
                <button
                    onClick={() => changeText()}
                    className="transition-all ease-in 1s cursor-pointer hover:scale-95 active:scale-80 text-white rounded-md px-4 py-1 bg-amber-500"
                >
                    Promote to Admin
                </button>
            </div>
        </div>
    );
};

export default Card3;
