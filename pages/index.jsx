import Image from "next/image";
import Link from "next/link";

import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Nav from "../components/Nav";

export async function getServerSideProps({ req, params }) {
  let host = req?.headers.host;
  const protocol = req.secure ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;
  const res = await fetch(`${baseUrl}/api/events`);
  const data = await res.json();
  return { props: { events: data } };
}

const Home = ({ events }) => {
  return (
    <div
      data-theme="light"
      className="container mx-auto md:max-h-screen overflow-hidden lg:max-w-7xl flex"
    >
      <LeftBar />

      {/*feed*/}

      <main className="bg-gray-100 w-full h-full md:border-x">
        <Nav />
        <div className="lg:px-14 px-2 pt-6 pb-28 grid md:grid-row-1 lg:grid-cols-2 lg:gap-x-9 gap-y-8 md:max-h-screen md:overflow-auto">
          {/*event*/}

          {events.map((event) => (
            /*event*/

            <div
              key={event._id}
              className=" bg-white h-fit shadow-sm rounded-2xl hover:shadow-md"
            >
              <div className=" bg-blend-overlay p-1">
                <Image
                  alt="event"
                  src={event.image || "/bike.jpg"}
                  width={900}
                  height={500}
                  object-fit="cover"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>

              <div className="stats flex px-6 -mt-5 space-x-5">
                <p className="group h-10 w-16 ml-2 bg-white hover:bg-red-500 flex items-center justify-center font-medium text-red-500 hover:text-white rounded-2xl shadow-sm content-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                  <span className="text-gray-800 ml-2 text-sm group-hover:text-white">
                    {event.likes || "#"}
                  </span>
                </p>

                <p className="group h-10 w-16 ml-2 bg-white hover:bg-blue-600 flex items-center justify-center font-medium text-blue-600 hover:text-white rounded-2xl shadow-sm content-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13 3v1.27a.75.75 0 001.5 0V3h2.25A2.25 2.25 0 0119 5.25v2.628a.75.75 0 01-.5.707 1.5 1.5 0 000 2.83c.3.106.5.39.5.707v2.628A2.25 2.25 0 0116.75 17H14.5v-1.27a.75.75 0 00-1.5 0V17H3.25A2.25 2.25 0 011 14.75v-2.628c0-.318.2-.601.5-.707a1.5 1.5 0 000-2.83.75.75 0 01-.5-.707V5.25A2.25 2.25 0 013.25 3H13zm1.5 4.396a.75.75 0 00-1.5 0v1.042a.75.75 0 001.5 0V7.396zm0 4.167a.75.75 0 00-1.5 0v1.041a.75.75 0 001.5 0v-1.041zM6 10.75a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zm0 2.5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-800 ml-2 text-sm group-hover:text-white">
                    23
                  </span>
                </p>
              </div>

              <div className="footer px-6 py-5">
                <div className="title flex justify-between bg-gradient-to-t border-transparent text-md">
                  <p className=" font-bold">{event.event_title || "#"}</p>
                  <p className="text-sm text-gray-400">
                    {event.ticket_price || "#"}
                  </p>
                </div>

                <div className="details flex justify-between items-center pt-1">
                  <p className="text-sm text-gray-400">
                    <span className="flex space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span>{event.location || "#"}</span>
                    </span>

                    <span className="flex pt-1 space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{event.date || "#"}</span>
                    </span>
                  </p>

                  <div>
                    <Link href={`/events/${event._id}`}>
                      <p className="buy flex flex-col items-center rounded-full bg-green-100 p-3 text-green-700 shadow-sm hover:shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/*end event*/}
        </div>
      </main>

      {/*end feed*/}

      <RightBar />
    </div>
  );
};

export default Home;
