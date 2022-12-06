import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/events");
  const data = await res.json();
  return { props: { events: data } };
}

const App2 = ({ events }) => {
  const router = useRouter();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [event_title, setName] = useState("");
  const [location, setlocation] = useState("");
  const [ticket_price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    setIsRefreshing(false);
  }, [events]);

  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  async function addUser(e) {
    e.preventDefault();
    const laodToast = toast.loading("Creating...");

    if (event_title === "" || ticket_price === "") {
      alert("no empty");
    }

    const upload = await Upload();

    if (upload[1] !== 200) {
      return console.log(upload);
    }

    const image = upload[0].secure_url;

    const body = { event_title, date, location, ticket_price, image };
    console.log(body);

    const data = await fetch("http://localhost:3000/api/add_event", {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (data.status === 200) {
      console.log("Ok");
      refreshData();
      toast.success("Created tht ticket", { id: laodToast });
    } else {
      console.log("No");
      toast.error("Oh noooo", { id: laodToast });
    }
  }

  async function Upload() {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ohallutq");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dmswkldli/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const uploaded_file = await res.json();

    if (!res.ok && !res.status === 200) {
      return console.log(res.status);
    } else {
      return [uploaded_file, res.status];
    }
  }

  return (
    <div data-theme="light" className="mx-auto w-1/2 my-20">
      <Toaster />
      <h1 className="font-bold py-3">User List</h1>
      <hr />
      <div className="py-3">
        {events.map((event) => {
          return <div>{event.location}</div>;
        })}
        <br></br>
        <hr />
      </div>

      <div>
        <form onSubmit={addUser}>
          <input
            type="text"
            placeholder="Event Name"
            className="input input-bordered w-full max-w-xs mt-5"
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <input
            onChange={(e) => setlocation(e.target.value)}
            placeholder="Location"
            name="location"
            className="input input-bordered w-full max-w-xs mt-5"
          />
          <br />

          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            name="price"
            className="input input-bordered w-full max-w-xs mt-5"
          />
          <br />
          <input
            type="date"
            placeholder="Event Date"
            className="input input-bordered w-full max-w-xs mt-5"
            onChange={(e) => setDate(e.target.value)}
          />
          <br />

          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs mt-5"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <br />

          <input
            type="submit"
            value="send"
            className="btn btn-block mt-5"
            style={{ backgroundColor: "#4C1D95" }}
          />
        </form>

        <br />
      </div>
      <div>
        {event_title} ~ {ticket_price} ~ {date} ~ {location}
        <br />
      </div>
    </div>
  );
};

export default App2;
