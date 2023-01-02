import React from "react";
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";

const ShowQr = () => {
  return (
    <div>
      {/*start qr*/}
      <div
        id="ticket"
        className="align-center items-center md:w-1/2 m-6 rounded-xl"
      >
        <Image
          className=""
          src={"/bike.jpg"}
          height={400}
          width={600}
          alt="event poster"
        />

        <div className="bg-[#7742db] p-6">
          <h1 className="font-medium text-lg text-white py-3">Event Title</h1>
          <QRCodeSVG value="a" bgColor={"#FFf"} fgColor={"#7742db"} />
        </div>
      </div>
      {/*end qr*/}
    </div>
  );
};

export default ShowQr;
