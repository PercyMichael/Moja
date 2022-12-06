import { NextPage } from "next";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import EventDetail from "../components/singleEvent/EventDetail";

const SingleEvent = () => {
  return (
    <div className="container mx-auto md:max-h-screen overflow-hidden lg:max-w-7xl flex">
      <LeftBar />
      <EventDetail />
      <RightBar />
    </div>
  );
};

export default SingleEvent;
