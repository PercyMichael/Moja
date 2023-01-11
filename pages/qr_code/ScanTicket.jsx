import { QrScanner } from "@yudiel/react-qr-scanner";

const ScanTicket = () => {
  return (
    <QrScanner
      onDecode={(result) => console.log(result)}
      onError={(error) => console.log(error?.message)}
    />
  );
};
export default ScanTicket;
