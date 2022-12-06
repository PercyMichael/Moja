import Image from "next/image";
import React from "react";
import EventNav from "../EventNav";

const EventDetail = () => {
  return (
    <main className="bg-gray-100 w-full h-full md:border-x">
      <EventNav />
      <div className="event-detail pb-30 lg:gap-x-9 gap-y-8 md:max-h-screen md:overflow-auto">
        <div className="flex flex-col justify-between poster px-5 py-4 bg-red-300 w-full h-96">
          <p className="flex justify-end font-semibold">UGX 12000</p>

          <div className="event-details flex justify-between items-center">
            <div>
              <p className="text-lg font-bold">Tigende Mukikade</p>
              <div className="flex space-x-9 py-2 text-sm">
                <p>Location</p>
                <p>Date</p>
              </div>
            </div>

            <div className="icon-stats flex space-x-12">
              <p className="flex flex-col">
                <span>&hearts;</span>
                <span className="text-sm">23</span>
              </p>

              <p className="flex flex-col">
                <span>&hearts;</span>
                <span className="text-sm">23</span>
              </p>
            </div>
          </div>
        </div>

        <Image src={"/bike.jpg"} height={400} width={600} alt="event poster" />
      </div>
    </main>
  );
};

export default EventDetail;
