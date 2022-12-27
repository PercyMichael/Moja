import React from "react";

const Stats = () => {
  return (
    <>
      <div className="flex justify-between align-middle bg-white m-3 p-4">
        <div id="tickets-bought" className="">
          <div className="stat-value text-[#7742db]">4,200</div>
          <div className="stat-title">Tickets Bought</div>
        </div>
        <div id="tickets-sold">
          <div className="stat-value text-[#7742db]">4,200</div>
          <div className="stat-title">Tickets Sold</div>
        </div>
        <div id="events">
          <div className="stat-value text-[#7742db]">4,200</div>
          <div className="stat-title">Events</div>
        </div>
      </div>
    </>
  );
};

export default Stats;
