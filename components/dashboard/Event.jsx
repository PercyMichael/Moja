import Link from "next/link";
import React from "react";
import { HiTicket, HiOutlineTicket } from "react-icons/hi2";
import { SlEvent } from "react-icons/sl";

const Event = (props) => {
  return (
    <Link href={`/qr_code/${props.id}`}>
      <div
        id="ticket"
        className=" hover:bg-gray-100 py-3 flex justify-between items-center border-b px-6"
      >
        <div className="flex items-center space-x-3">
          <SlEvent className="text-2xl" />
          <div className="flex flex-col">
            <h4 className="text-lg font-bold">{props.event_title}</h4>
            <div className="text-sm text-gray-500 flex justify-between">
              <div>2340 Tickets sold</div>
              <div>200000</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Event;
