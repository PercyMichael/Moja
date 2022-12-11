import Image from "next/image";
import React from "react";
import EventNav from "../EventNav";

const EventDetail = (props) => {
  return (
    <main className="w-full h-full md:border-x">
      <EventNav />
      <div className="event-detail bg-white pb-30 lg:gap-x-9 gap-y-8 md:max-h-screen md:overflow-auto">
        <Image
          className=" rounded-b-2xl"
          src={"/bike.jpg"}
          height={400}
          width={600}
          alt="event poster"
        />
        <div className="flex space-x-6 py-5 px-3">
          <p className="bg-[#7743db] px-3 py-1 text-sm text-white rounded-full font-bold">
            Concert
          </p>
          <p className="py-1 text-[#7743db] text-sm font-bold">
            12,Dec,2022 at 2:30pm
          </p>
        </div>

        <div>Title of Arnarhey</div>
      </div>
    </main>
  );
};

export default EventDetail;
