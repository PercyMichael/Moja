import Link from "next/link";
import React from "react";

const Ticket = (props) => {
  return (
    <Link href={`/qr_code/${props.id}`}>
      <div
        id="ticket"
        className=" hover:bg-gray-100 py-3 flex justify-between items-center border-b px-6"
      >
        <div className="flex flex-col">
          <h4 className="text-lg font-bold">{props.event_title}</h4>
          <div className="text-sm text-gray-500">Expired . 40 days ago</div>
        </div>
        <h4 className="text-medium font-bold text-[#7742db]">
          UGX {props.price}
        </h4>
      </div>
    </Link>
  );
};

export default Ticket;
