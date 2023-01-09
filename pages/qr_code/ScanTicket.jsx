import React from "react";
import QrScan from "react-qr-reader";

const ScanTicket = () => {
  const [qrscan, setQrscan] = useState("No result");

  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <center>
        <div style={{ marginTop: 30 }}>
          <QrScan
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: 240, width: 320 }}
          />
        </div>
        <h1>{qrscan}</h1>
      </center>
    </div>
  );
};

export default ScanTicket;
