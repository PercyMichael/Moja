import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventNav = () => {
  return (
    <header className="md:hidden bg-white ">
      <div className="flex justify-between p-6 items-center">
        <div className="">
          <Link href={"/"}>
            <Image
              alt="Logo"
              src={"/vercel.svg"}
              height={300}
              width={100}
              className="h-8"
            ></Image>
          </Link>
        </div>
        <div className=" bg-blue-400 text-white uppercase text-sm items-center p-2 rounded-xl font-bold cursor-pointer">
          Tickets
        </div>
      </div>
      <nav className="bg-red-200 py-4 flex items-center justify-evenly text-lg md:hidden">
        <div>Concerts</div>
        <div>Sports</div>
        <div>Cinemas</div>
        <div>Shows</div>
      </nav>
    </header>
  );
};

export default EventNav;
