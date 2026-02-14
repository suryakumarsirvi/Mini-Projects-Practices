import React from "react";

const StatsCard = ({ Color, Text, value }) => {
  return (
    <div className={`w-72 h-32 rounded-md border flex items-center justify-center flex-col ${Color} bg-white`}>
      <h1 className='text-4xl font-semibold'>{value}</h1>
      <p>{Text}</p>
    </div>
  );
};

export default React.memo(StatsCard);

