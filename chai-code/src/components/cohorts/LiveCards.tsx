export const LiveCards = () => {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3  ">
      <Cards />
      <Cards />
      <Cards />
      
    </div>
  );
};

export default LiveCards;

const Cards = () => {
  return (
    <div className="  flex  md:items-center   md:justify-center">
      <div className="w-60 sm:w-100 rounded-xl p-4  shadow-xl">
        <div className="w-full h-40 sm:h-60 bg-black rounded-xl"></div>
        <div className="p-2">
          <h3 className="sm:text-3xl">Web dev Cohort-Live 2.0</h3>
          <p className="sm:text-md">
            Learn to build software for web with best and <br /> latest tech
            stack
          </p>
        </div>
        <div className="flex gap-4 items-center  p-2">
          <div className="p-2 border rounded-xl">
            <span className="sm:text-2xl">6999 INR</span>
          </div>
          <div>
            <span className="line-through sm:text-lg">8999 INR</span>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="w-full sm:px-2 sm:py-3 bg-blue-500 rounded-xl sm:text-xl outline-none text-stone-100">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
