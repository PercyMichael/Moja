import React from "react";
import Nav from "../../components/Nav";
import Stats from "../../components/dashboard/Stats";
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";

export async function getServerSideProps({ req, params }) {
  const host = req?.headers.host;
  const res = await fetch(`http://${host}/api/ticket/${params?.id}`);
  const data = await res.json();
  console.log(data, params);
  return { props: { ticket: data } };
}

const Ticket = ({ ticket, hosty }) => {
  return (
    <div
      data-theme="light"
      className="container mx-auto md:max-h-screen overflow-hidden lg:max-w-7xl flex"
    >
      <main className="w-full h-full md:border-x">
        <Nav />
        <Stats />

        {/*start qr*/}

        <div
          id="ticket"
          className="border shadow-sm rounded-md align-center items-center md:w-1/2 m-6"
        >
          <div className="p-6 font-semibold text-black text-2xl text-center">
            Thank You!
            <p className="text-center text-gray-300">Percy</p>
          </div>
          <Image
            className=""
            src={ticket.image || "/bike.jpg"}
            height={400}
            width={600}
            alt="event poster"
          />

          <h1 className="text-lg font-bold text-black text-center py-3">
            {ticket.event_title}
          </h1>
          <p className="text-center">
            {ticket.date || "Happenning @ 3 Nove 2023 at 3:30pm"}
          </p>
          <div className=" p-6 flex flex-col items-center">
            <QRCodeSVG
              className="border-8]"
              value={ticket.uuid}
              width={200}
              height={200}
              bgColor={"#FFf"}
              fgColor={"#7742db"}
            />
            <div id="ticket-footer" className="mt-5">
              www.google.com
            </div>
          </div>
        </div>
        {/*end qr*/}
      </main>
    </div>
  );
};

export default Ticket;
