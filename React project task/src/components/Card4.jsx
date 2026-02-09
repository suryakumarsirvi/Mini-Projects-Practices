import React, { useState } from "react";

const Card4 = () => {
    let [Hide, setHide] = useState(true);

    const handleHide = () => {
        setHide(prev => !prev);
    };

    return (
        <div className="bg-green-400 rounded-lg p-2 overflow-hidden">
            <h1 className="text-xl text-white font-semibold">
                Visibility Card
            </h1>
            <div className="h-full flex items-center justify-center flex-col gap-6">
                <button
                    onClick={() => handleHide()}
                    className={`transition-all ease-in 1s cursor-pointer hover:scale-95 active:scale-80 ${
                        Hide ? "bg-green-800" : "bg-red-400"
                    } text-white rounded-md px-4 py-1`}
                >
                    {Hide ? "Show Notification" : "Hide Notification"}
                </button>
                <div
                    className={`w-full transition-all ease-in 0.5s h-1/4 ${
                        Hide ? "hidden" : "flex"
                    } bg-white/70 rounded-md p-2 items-center`}
                >
                    <h1 className="text-md">
                        🚀 This message is controlled by useState boolean value.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Card4;
