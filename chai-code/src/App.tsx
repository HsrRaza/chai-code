import CohortPage from "./pages/CohortPage";
import HeroPage from "./pages/HeroPage";

function App() {
  return (
    <div className="h-full w-full bg-stone-200 ">
      <div className="md:w-[65%] mx-auto min-h-screen">
        <HeroPage />
        <CohortPage />
      </div>
    </div>
  );
}

export default App;
