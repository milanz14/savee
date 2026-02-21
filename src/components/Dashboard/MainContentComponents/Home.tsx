import Chart from "./Chart";
import Performance from "./Performance";
import RecentTransactions from "./RecentTransactions";
import Tiles from "./Tiles";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[350px] gap-2">
      <Performance />
      <Tiles />
      <Chart />
      <RecentTransactions />
    </div>
  );
};

export default Home;
