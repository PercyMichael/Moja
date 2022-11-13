import { Feed } from "../components/Feed"
import LeftBar from "../components/LeftBar"
import RightBar from "../components/RightBar"


const Home = () => {
  return (
    <div className="container mx-auto h-full max-w-screen-2x flex ">
      <LeftBar/>
      <Feed />
      <RightBar/>

     
    </div>
  )
}

export default Home
