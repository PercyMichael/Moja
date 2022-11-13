import Event from "./Event"
import Nav from "./Nav"

export const Feed = () =>
{
    
  return (
      <main className="bg-gray-100 w-full h-full md:border-x-1 border-red-600">
          <Nav />
          <div className="md:px-20 px-2 py-6 grid md:grid-row-1 md:grid-cols-2 gap-x-12 gap-y-8 md:max-h-screen md:overflow-auto">
            
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


  )
}
