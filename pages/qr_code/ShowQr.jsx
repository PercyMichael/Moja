import React from "react";
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";

const ShowQr = () => {
  return (
    <div>
      {/*start qr*/}
      <p>Hee</p>
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
          src={"/bike.jpg"}
          height={400}
          width={600}
          alt="event poster"
        />

        <h1 className="text-lg font-bold text-black text-center py-3">
          Event Title
        </h1>
        <p className="text-center">Happenning @ 3 Nove 2023 at 3:30pm</p>
        <div className=" p-6 flex flex-col items-center">
          <QRCodeSVG
            className="border-8]"
            value="a"
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
    </div>
  );
};

export default ShowQr;
