import Cta from "./components/Cta"
import HeadSec from "./components/HeadSec"
import Navbar from "./components/Navbar"
import Video from "./components/Video"


function App() {
  return (
    <div className="bg-stone-100">
      <div className="md:w-[65%] mx-auto h-screen">
      <Navbar/>
      <HeadSec/>
      <Cta/>
      <Video/>

      </div>

    </div>
  )
}

export default App