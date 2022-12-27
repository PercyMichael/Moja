import Image from "next/image";
import Link from "next/link";
import {
  MdOutlineSportsBaseball,
  MdOutlineTheaterComedy,
  MdOutlineTheaters,
} from "react-icons/md";

const Nav = () => {
  return (
    <header className=" bg-white ">
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
        <Link
          href={"/user/dashboard"}
          className=" bg-blue-400 text-white uppercase text-sm items-center p-2 rounded-xl font-bold cursor-pointer"
        >
          Tickets
        </Link>
      </div>
      <nav className=" py-4 flex items-center justify-evenly text-lg md:hidden">
        <div className="border px-2 py-1 rounded-full flex items-center space-x-2 align-baseline">
          <MdOutlineSportsBaseball className="text-[#7742db] text-2xl" />
          <div>Sports</div>
        </div>
        <div className="border px-2 py-1 rounded-full flex items-center space-x-2 align-baseline">
          <MdOutlineTheaters className="text-[#7742db] text-2xl" />
          <div>Cinemas</div>
        </div>
        <div className="border px-2 py-1 rounded-full flex items-center space-x-2 align-baseline">
          <MdOutlineTheaterComedy className="text-[#7742db] text-2xl" />
          <div>Shows</div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
