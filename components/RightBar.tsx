import UserInfo from "./UserInfo"
const RightBar = () =>
{
  return (
      <aside className="right w-1/5 min-h-full hidden md:block">
          <UserInfo/>
      </aside>
  )
}

export default RightBar