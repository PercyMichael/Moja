import { NextPage } from "next";
import { Feed } from "../components/Feed";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

const Home = () => {
  return (
    <div className="container mx-auto md:max-h-screen overflow-hidden lg:max-w-7xl flex">
      <LeftBar />
      <Feed />
      <RightBar />
    </div>
  );
};

export default Home;
