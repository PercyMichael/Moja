import Image from "next/image";
import React from "react";
import EventNav from "../EventNav";

//icons
import { MdLocationOn } from "react-icons/md";

const EventDetail = (props) => {
  return (
    <main className="w-full h-full md:border-x">
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
          <div className="top-right py-1 px-3 rounded-full absolute top-3 right-4 bg-white text-[#7743db] font-semibold">
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
          Title of Arnarhey
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
        <div className="qunatity"></div>
      </div>
      {/*paying section*/}
      <div className="bg-yellow-300 p-10 w-full my-5"></div>
    </main>
  );
};

export default EventDetail;
