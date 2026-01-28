

const Navbar = () => {
  return (
    <div className="w-full h-auto ">

        <div className=" flex justify-between items-center p-4 shadow-xl shadow-blue-200 rounded-xl  sticky ">

        {/* logo */}
        <div>
            <h2 className="md:text-4xl">ChaiCode</h2>
        </div>
        <div className="flex gap-8 items-center">
            <h3 className="md:text-xl">Cohorts</h3>
            <h3 className="md:text-xl">Udemy</h3>
            <h3 className="md:text-xl">Docs</h3>
            <h3 className="md:text-xl">Reviews</h3>
        </div>

        {/* btn login */}
        <div>
            <button className="px-5 py-2 bg-blue-500 md:text-2xl rounded-xl text-center  outline-none text-stone-100">Login</button>
        </div>
        
        {/* <div className="absolute w-24 h-24  bg-linear-to-b from-blue-400 to-blue-400"></div> */}
        </div>
    </div>

  )
}

export default Navbar