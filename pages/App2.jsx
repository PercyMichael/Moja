import { useState } from "react";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();
  return { props: { users: data } };
}

const App2 = ({ users }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  async function addUser(e) {
    e.preventDefault();
    const body = { name, email };
    console.log(body);
    const data = await fetch("http://localhost:3000/api/add_user", {
      method: "POST",
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  return (
    <div className="mx-auto w-1/2 my-20">
      <h1 className="font-bold py-3">User List</h1>
      <hr />
      <div className="py-3">
        {users.map((user) => {
          return (
            <div>
              <span key={user.id}>
                <span className="font-bold text-blue-700">{user.name}</span> -{" "}
                <span>{user.email}</span>
              </span>
            </div>
          );
        })}
        <br></br>
        <hr />
      </div>

      <div>
        <form onSubmit={addUser}>
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
          <br />
          <input type="submit" value="send" />
        </form>
      </div>

      <div>
        {name} ~ {email}
      </div>
    </div>
  );
};

export default App2;
