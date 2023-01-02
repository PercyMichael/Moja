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

        <div className=" p-6 flex flex-col items-center shadow-md rounded-xl">
          <h1 className="font-medium text-lg text-[#7742db] py-3">
            Event Title
          </h1>
          <QRCodeSVG
            className="border-8 border-white"
            value="a"
            width={300}
            height={300}
            bgColor={"#FFf"}
            fgColor={"#7742db"}
          />
        </div>
      </div>
      {/*end qr*/}
    </div>
  );
};

export default ShowQr;
