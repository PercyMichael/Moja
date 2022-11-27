import { useState,useEffect } from "react";
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import Image from "next/image";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();
  return { props: { users: data } };
}

const App2 = ({ users }) =>
{
  const router = useRouter();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    setIsRefreshing(false);
  }, [users]);


  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };
  
  
  async function addUser(e)
  {
    e.preventDefault();
    const laodToast=toast.loading('Creating...');

    if (name === "" || email==="") {
      alert('no empty')
    }

    const upload = await Upload();

    if (upload[1] !== 200)
    {
      return console.log(upload);
    }
    
    const image=upload[0].secure_url
    //return console.log(upload[0].url);
    

    const body = { name, email ,image};
    console.log(body);

    const data = await fetch("http://localhost:3000/api/add_user", {
      method: "POST",
      body: JSON.stringify(body),
    });


    if (data.status===200) {
      console.log('Ok');
      refreshData();
    } else {
      console.log('No');
    }

    toast.success('Created tht ticket',{id:laodToast});
  }


  async function Upload()
  {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ohallutq');
    

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dmswkldli/image/upload',
      {
        method: 'POST',
        body:formData
      }
    )
    const uploaded_file = await res.json();

    if (!res.ok && !res.status===200) {
      return console.log(res.status)
    }
    else
    {
      return [uploaded_file,res.status]
    }

    

  }



  return (
    <div className="mx-auto w-1/2 my-20">
      <Toaster/>
      <h1 className="font-bold py-3">User List</h1>
      <hr />
      <div className="py-3">
        {users.map((user) => {
          return (
            <div>
              <span key="{user.id}">
                <span className="font-bold text-blue-700">{user.name}</span> -{" "}
                <span>{user.email}</span>-<span>{user.image }</span>
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
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name="email"
            className="p-2 border"
          />
          <br />

          
          <input type="file" onChange={(e) =>
          {
            setFile(e.target.files[0]);
          }} />

      <input type="submit" value="send" className="bg-blue-800 py-2 px-3 mt-3 text-white"/>
        </form>

          <br/>
      </div>
      <div>
        {name} ~ {email}
        <br />
      </div>
    </div>
  );
};

export default App2;
