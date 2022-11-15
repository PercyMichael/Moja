import Event from "./Event";
import Nav from "./Nav";

export const Feed = () => {
  return (
    <main className="bg-gray-100 w-full h-full md:border-x">
      <Nav />
      <div className="lg:px-14 px-2 pt-6 pb-28 grid md:grid-row-1 lg:grid-cols-2 lg:gap-x-9 gap-y-8 md:max-h-screen md:overflow-auto">
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </main>
  );
};
