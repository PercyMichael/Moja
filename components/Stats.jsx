import React from "react";

const Stats = () => {
  return (
    <>
      <div className="flex text-white justify-evenly align-middle mx-3 my-11 py-7 px-3 shadow rounded-xl bg-[#7742db]">
        <div id="tickets-bought" className="flex flex-col items-center">
          <div className=" font-bold text-2xl">4,200</div>
          <div>Tickets Bought</div>
        </div>
        <div id="events" className="flex flex-col items-center">
          <div className=" font-bold text-2xl">4,200</div>
          <div>Events</div>
        </div>
        <div id="tickets-sold" className="flex flex-col items-center">
          <div className=" font-bold text-2xl">4,200</div>
          <div>Tickets Sold</div>
        </div>
      </div>
    </>
  );
};

export default Stats;
