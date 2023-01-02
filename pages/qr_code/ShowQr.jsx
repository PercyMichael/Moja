import React from "react";
import { QRCodeSVG } from "qrcode.react";

const ShowQr = () => {
  return (
    <div>
      ShowQr
      <div className="align-center items-center bg-red-200">
        <QRCodeSVG value="a" />
      </div>
    </div>
  );
};

export default ShowQr;
