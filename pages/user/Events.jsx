import React from "react";
import Nav from "../../components/Nav";
import Stats from "../../components/dashboard/Stats";
import Ticket from "../../components/dashboard/Ticket";
import Event from "../../components/dashboard/Event";

export async function getServerSideProps({ req, params }) {
  const host = req?.headers.host;
  const fetch_tickets = await fetch(`http://${host}/api/user/get_events`);
  const data = await fetch_tickets.json();

  return { props: { events: data } };
}

const Events = ({ events }) => {
  return (
    <div
      data-theme="light"
      className="container mx-auto md:max-h-screen overflow-hidden lg:max-w-7xl flex"
    >
      <main className="w-full h-full md:border-x">
        <Nav />
        <Stats />

        <div id="my-tickets">
          <div
            id="top-nav"
            className="flex w-full justify-between px-6 h-1/2 overflow-scroll"
          >
            <h6>Recent Events</h6>
            <h6 className="text-sm text-gray-500">See All</h6>
          </div>
          {/*tickets*/}
          {events.map((event) => (
            <div>
              <h1 key={event._id}>{event.event_title}</h1>
              <Event event_title={event.event_title} />
            </div>
          ))}

          {/*end tickets*/}
        </div>
      </main>
    </div>
  );
};

export default Events;
