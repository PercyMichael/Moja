import { NextPage } from "next";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/events");
  const data = await res.json();
  return { props: { events: data } };
}

const SingleEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="container mx-auto md:max-h-screen overflow-hidden lg:max-w-7xl flex">
      Hi am ,{id}
    </div>
  );
};

export default SingleEvent;
