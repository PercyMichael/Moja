import { NextPage } from "next";
import { useRouter } from "next/router";

import LeftBar from "../../components/LeftBar";
import RightBar from "../../components/RightBar";
import EventDetail from "../../components/singleEvent/EventDetail";

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/events/${params?.id}`);
  const data = await res.json();
  console.log(data, params);
  return { props: { event: data } };
}

const SingleEvent = ({ event }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="container mx-auto md:max-h-screen overflow-hidden lg:max-w-7xl flex">
      <LeftBar />
      <EventDetail
        title={event.event_title}
        date={event.date}
        location={event.location}
        price={event.ticket_price}
      />
      <RightBar />
    </div>
  );
};

export default SingleEvent;
