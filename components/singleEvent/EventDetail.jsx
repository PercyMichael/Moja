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
      </div>
    </main>
  );
};

export default EventDetail;
