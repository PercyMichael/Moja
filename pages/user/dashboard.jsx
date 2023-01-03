import React from "react";
import Nav from "../../components/Nav";
import Stats from "../../components/dashboard/Stats";
import Ticket from "../../components/dashboard/Ticket";

export async function getServerSideProps({ req, params }) {
  const host = req?.headers.host;
  const fetch_tickets = await fetch(`http://${host}/api/user/get_tickets`);
  const data = await fetch_tickets.json();

  return { props: { tickets: data } };
}

const dashborad = ({ tickets }) => {
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
            <h6>Recent Tickets</h6>
            <h6 className="text-sm text-gray-500">See All</h6>
          </div>
          {/*tickets*/}
          {tickets.map((ticket) => (
            <Ticket
              key={ticket._id}
              price={ticket.price}
              event_title={ticket.event_title}
            />
          ))}

          {/*end tickets*/}
        </div>
      </main>
    </div>
  );
};

export default dashborad;
