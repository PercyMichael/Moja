import React from "react";
import Nav from "../../components/Nav";
import Stats from "../../components/Stats";

const dashborad = () => {
  return (
    <div
      data-theme="light"
      className="container mx-auto md:max-h-screen overflow-hidden lg:max-w-7xl flex"
    >
      <main className="w-full h-full md:border-x">
        <Nav />
        <Stats />
        <div id="my-tickets">
          <div id="top-nav" className="flex w-full justify-between px-6">
            <h6>Recent Tickets</h6>
            <h6 className="text-sm text-gray-500">See All</h6>
          </div>
          {/*tickets*/}
          <div
            id="ticket"
            className="py-3 flex justify-between items-center border-b px-6"
          >
            <div className="flex flex-col">
              <h4 className="text-lg font-bold">Hello</h4>
              <div className="text-sm text-gray-500">Expired . 40 days ago</div>
            </div>
            <h4 className="text-medium font-bold text-[#7742db]">UGX 20,000</h4>
          </div>
          <div
            id="ticket"
            className="py-3 flex justify-between items-center border-b px-6"
          >
            <div className="flex flex-col">
              <h4 className="text-lg font-bold">Hello</h4>
              <div className="text-sm text-gray-500">Expired . 40 days ago</div>
            </div>
            <h4 className="text-medium font-bold text-[#7742db]">UGX 20,000</h4>
          </div>
          <div
            id="ticket"
            className="py-3 flex justify-between items-center border-b px-6"
          >
            <div className="flex flex-col">
              <h4 className="text-lg font-bold">Hello</h4>
              <div className="text-sm text-gray-500">Expired . 40 days ago</div>
            </div>
            <h4 className="text-medium font-bold text-[#7742db]">UGX 20,000</h4>
          </div>
          <div
            id="ticket"
            className="py-3 flex justify-between items-center border-b px-6"
          >
            <div className="flex flex-col">
              <h4 className="text-lg font-bold">Hello</h4>
              <div className="text-sm text-gray-500">Expired . 40 days ago</div>
            </div>
            <h4 className="text-medium font-bold text-[#7742db]">UGX 20,000</h4>
          </div>
          <div
            id="ticket"
            className="py-3 flex justify-between items-center border-b px-6"
          >
            <div className="flex flex-col">
              <h4 className="text-lg font-bold">Hello</h4>
              <div className="text-sm text-gray-500">Expired . 40 days ago</div>
            </div>
            <h4 className="text-medium font-bold text-[#7742db]">UGX 20,000</h4>
          </div>
          <div
            id="ticket"
            className="py-3 flex justify-between items-center border-b px-6"
          >
            <div className="flex flex-col">
              <h4 className="text-lg font-bold">Hello</h4>
              <div className="text-sm text-gray-500">Expired . 40 days ago</div>
            </div>
            <h4 className="text-medium font-bold text-[#7742db]">UGX 20,000</h4>
          </div>
          {/*end tickets*/}
        </div>
      </main>
    </div>
  );
};

export default dashborad;
