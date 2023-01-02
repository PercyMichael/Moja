import { useRouter } from "next/router";
import React, { useState } from "react";
import uuid from "react-uuid";

import LeftBar from "../../components/LeftBar";
import RightBar from "../../components/RightBar";
import EventDetail from "../../components/singleEvent/EventDetail";
import TicketChoice from "../../components/singleEvent/TicketChoice";

{
  /*fetch event info*/
}
export async function getServerSideProps({ req, params }) {
  const host = req?.headers.host;
  const res = await fetch(`http://${host}/api/events/${params?.id}`);
  const data = await res.json();
  console.log(data, params);
  return { props: { event: data } };
}
{
  /*end*/
}

const SingleEvent = ({ event }) => {
  const [price, setPrice] = useState(0);
  const event_title = event.event_title;

  //buy ticket
  async function buy_ticket() {
    {
      /*code to pay, after pay then create ticket*/
    }

    const body = {
      price,
      uuid: price + "-" + uuid(),
      event_title: event_title,
    };
    console.log(body);
    const data = await fetch("http://localhost:3000/api/ticket/buy_ticket", {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (data.status === 200) {
      console.log("Ok");
    }
  }
  //end buying

  const router = useRouter();
  const { id } = router.query;
  return (
    <div
      data-theme="light"
      className="container mx-auto md:max-h-screen overflow-hidden lg:max-w-7xl flex flex-col"
    >
      <LeftBar />
      <EventDetail
        title={event.event_title}
        date={event.date}
        location={event.location}
        price={event.ticket_price}
      />
      {/*choose ticket*/}
      <div className="qunatity space-y-6 py-2 mx-3 my-7 items-center justify-between">
        <TicketChoice
          price={100}
          name="haha"
          on
          onChange={(e) => setPrice(e.target.value)}
        />
        <TicketChoice
          price={200}
          name="haha"
          on
          onChange={(e) => setPrice(e.target.value)}
        />
        <TicketChoice
          price={300}
          name="haha"
          on
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      {/*paying section*/}
      <div className="border-t px-2 w-full my-5 justify-center items-center flex flex-col">
        <p className="font-bold py-5 text-[#7743db] text-lg">UGX {price}</p>
        <input
          type="submit"
          value="BUY TICKET"
          className="btn btn-block w-2/2"
          style={{ backgroundColor: "#4C1D95" }}
          onClick={buy_ticket}
        />
      </div>

      <RightBar />
    </div>
  );
};

export default SingleEvent;
