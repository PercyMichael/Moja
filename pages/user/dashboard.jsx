import React from "react";
import Nav from "../../components/Nav";
import Stats from "../../components/Stats";

const dashborad = () => {
  return (
    <div
      data-theme="light"
      className="container mx-auto md:max-h-screen overflow-hidden lg:max-w-7xl flex"
    >
      <main className="bg-gray-100 w-full h-full md:border-x">
        <Nav />
        <Stats />
      </main>
    </div>
  );
};

export default dashborad;
