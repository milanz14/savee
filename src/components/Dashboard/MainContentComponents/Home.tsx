import Chart from "./Chart";
import Performance from "./Performance";
import Recent from "./Recent";
import Tiles from "./Tiles";

const Home = () => {
  return (
    <div>
      <Chart />
      <Performance />
      <Tiles />
      <Recent />
    </div>
  );
};

export default Home;
