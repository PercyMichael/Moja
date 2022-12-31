import Image from "next/image";
import React, { useState } from "react";
import EventNav from "../EventNav";
import TicketChochoce from "./TicketChoice";
import uuid from "react-uuid";

//icons
import { MdLocationOn } from "react-icons/md";

const EventDetail = (props) => {
  const [price, setPrice] = useState(0);

  async function buy_ticket() {
    {
      /*code to pay, after pay then create ticket*/
    }
    const body = { price, uuid: price + "-" + uuid() };
    console.log(body);
    /*const data = await fetch("http://localhost:3000/api/buy_ticket", {
        method: "POST",
        body: JSON.stringify(body, uuid()),
      });
      */
  }
  return (
    <main data-theme="light" className="w-full h-full md:border-x">
      <EventNav />
      <div className="event-detail bg-white pb-30 lg:gap-x-9 gap-y-8 md:max-h-screen md:overflow-auto">
        <div className="relative ">
          <Image
            className=" rounded-b-2xl shadow-xl"
            src={"/bike.jpg"}
            height={400}
            width={600}
            alt="event poster"
          />
          <div className="top-right py-1 px-3 rounded-full absolute top-3 right-4 bg-white bg-opacity-30 text-white font-semibold text-xs">
            UGX 50,000
          </div>
        </div>
        <div className="flex space-x-3 py-5 px-3">
          <p className="bg-[#7743db] px-3 py-1 text-sm font-light text-white rounded-full">
            Concert
          </p>
          <p className="py-1 text-[#7743db] font-light text-xs">12 Dec 2022</p>
          <p className="py-1 text-[#7743db] font-light text-xs">2:30pm</p>
        </div>

        <p className="px-3 text-black font-bold text-lg break-words capitalize">
          {props.title}
        </p>
        <p className="px-3 space-x-1 flex items-center">
          <MdLocationOn className="text-[#7742db] text-xl" />{" "}
          <span className="font-light text-gray-500 py-3">Location</span>
        </p>

        <p className="text-md px-3 text-black">
          Checking the network cables, modem, and router Reconnecting to Wi-Fi,
          No internet Try: Checking the network cables, modem, and router
          Reconnecting to Wi-Fi
        </p>
        {/*choose ticket*/}
        <div className="qunatity space-y-6 py-2 mx-3 my-7 items-center justify-between">
          <TicketChochoce
            price={100}
            name="haha"
            on
            onChange={(e) => setPrice(e.target.value)}
          />
          <TicketChochoce
            price={200}
            name="haha"
            onChange={(e) => setPrice(e.target.value)}
          />
          <TicketChochoce
            price={300}
            name="haha"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      {/*paying section*/}
      <div className="border-t px-2 py-10 w-full my-5 justify-center items-center flex flex-col">
        <p className="font-bold text-[#7743db] text-lg">UGX {price}</p>
        <input
          type="submit"
          value="BUY TICKET"
          className="btn btn-block mt-5 w-2/2"
          style={{ backgroundColor: "#4C1D95" }}
          onClick={buy_ticket}
        />
      </div>
    </main>
  );
};

export default EventDetail;
