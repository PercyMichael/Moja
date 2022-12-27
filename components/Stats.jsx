import React from "react";

const Stats = () => {
  return (
    <>
      <div className="flex justify-between align-middle bg-white m-3 py-4 px-3">
        <div id="tickets-bought" className="">
          <div className="text-[#7742db] font-bold text-2xl">4,200</div>
          <div className="stat-title">Tickets Bought</div>
        </div>
        <div id="tickets-sold">
          <div className=" text-[#7742db] font-bold text-2xl">4,200</div>
          <div className="stat-title">Tickets Sold</div>
        </div>
        <div id="events">
          <div className=" text-[#7742db] font-bold text-2xl">4,200</div>
          <div className="stat-title">Events</div>
        </div>
      </div>
    </>
  );
};

export default Stats;
