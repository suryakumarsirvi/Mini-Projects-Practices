import React, { useState } from "react";

const Card2 = () => {
    const [Text, setText] = useState("Suryakumar Sirvi 🌟");

    const changeText = ()=>{
        setText("🧑‍💻 SDE-X");
    }

    return (
        <div className="bg-pink-400 rounded-lg p-2 overflow-hidden">
            <h1 className="text-xl text-white font-semibold">Name Card</h1>
            <div className="h-full flex items-center justify-center flex-col gap-6">
                <h1 className="text-2xl text-white font-semibold text-center">{Text}</h1>
                <button
                    onClick={() =>changeText()}
                    className="cursor-pointer transition-all ease-in 1s hover:scale-95 active:scale-80 text-white rounded-md px-4 py-1 bg-white/50"
                >
                    Change Text
                </button>
            </div>
        </div>
    );
};

export default Card2;
