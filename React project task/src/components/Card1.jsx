import React, { useState } from "react";

const Card1 = () => {
    let [count, setCount] = useState(0);

    const countAdd =()=>{
        count++
        setCount(count);
    }

    const countMinus =()=>{
        count--;
        setCount(count);
    }

    const countReset =()=>{
        setCount(0);
    }

    return (
        <div className="bg-purple-400 rounded-lg p-2 overflow-hidden">
            <h1 className="text-xl text-white font-semibold">Counter Card</h1>
            <div className="h-full flex items-center justify-center flex-col gap-6">
                <p className="text-xl text-white font-semibold">{count}</p>
                <div className="flex items-center justify-center gap-4">
                    <button onClick={()=>countMinus()} className="transition-all ease-in 1s cursor-pointer hover:scale-95 active:scale-80 text-white rounded-md px-4 py-1 bg-white/50">
                        <i className="ri-subtract-fill">
                        </i>
                    </button>
                    <button onClick={()=>countReset()} className="transition-all ease-in 1s cursor-pointer hover:scale-95 active:scale-80 text-white rounded-md px-4 py-1 bg-white/50">
                        <i className="ri-loop-right-fill">
                        </i>
                    </button>
                    <button onClick={()=>countAdd()} className="transition-all ease-in 1s cursor-pointer hover:scale-95 active:scale-80 text-white rounded-md px-4 py-1 bg-white/50">
                        <i className="ri-add-large-line">
                        </i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card1;
