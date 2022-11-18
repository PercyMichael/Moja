import React from 'react'
import { InferGetStaticPropsType } from 'next'

async function getServerSideProps()
{     
    const users = await fetch('http://localhost:3000/api/users');
    const data = await users.json();
  return { props: { data } };
}

interface Props
{
  data:string
}

function App2({data}: InferGetStaticPropsType<typeof getServerSideProps>)
{
  
  return (
    <div>{data}</div>
  )
}

export default App2