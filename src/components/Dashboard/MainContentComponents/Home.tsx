import Chart from "./Chart";
import Performance from "./Performance";
import Recent from "../SidebarContentComponents/Recent";
import Tiles from "./Tiles";

const Home = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-2 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-2">
      <Performance />
      <Tiles />
      <Chart />
      <Recent />
    </div>
  );
};

export default Home;
