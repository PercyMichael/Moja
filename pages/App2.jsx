import { useState } from "react";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();
  return { props: { users: data } };
}

async function addUser() {
  const data = await fetch("http://localhost:3000/api/add_user");
}

const App2 = ({ users }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="mx-auto w-1/2 my-20">
      <h1 className="font-bold py-3">User List</h1>
      <hr />
      <div className="py-3">
        {users.map((user) => {
          return (
            <div>
              <span className="font-bold text-blue-700">{user.name}</span> -{" "}
              <span>{user.email}</span>
            </div>
          );
        })}
        <br></br>
        <hr />
      </div>

      <div>
        <form>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            name="name"
            className="p-2 border"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name="email"
            className="p-2 border"
          />
        </form>
      </div>

      <div>
        {name} ~ {email}
      </div>
    </div>
  );
};

export default App2;
